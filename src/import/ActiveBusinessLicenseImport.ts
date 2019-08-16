import "reflect-metadata";
import { createConnection, getManager, getRepository } from "typeorm";
import * as Papa from "papaparse";
import * as https from "https";
import * as _ from "lodash";
import { Location, normalizeAddress } from "../entity/Location";
import { ActiveBusinessLicense } from "../entity/ActiveBusinessLicense";
import { activeBusinessLicenseRowToEntity } from "../mapper/ActiveBusinessLicenseMapper";
import { UpdateLog } from "../entity/UpdateLog";
import { rejects } from "assert";
require("dotenv").config();

const googleMapsClient = require("@google/maps").createClient({
  key: process.env.GOOGLE_API_KEY
});

async function geocodeAddress (address: string): Promise<Location> {
  if (!address) {
    return;
  }
  const locationRepo = getRepository(Location);
  const cachedLocation = await locationRepo.findOne({ address });
  if (cachedLocation) {
    return cachedLocation;
  }
  console.log(`New Location: ${address}.`);
  return new Promise<Location>((resolve, reject) => {
    googleMapsClient.geocode({
      address
    }, function (err, response) {
      if (!err) {
        if (response.json.results.length === 0) {
          reject(`Google found no location for "${address}".`);
        }
        const geometry = response.json.results[0].geometry.location;
        const location = new Location();
        location.address = address;
        location.latitude = geometry.lat;
        location.longitude = geometry.lng;
        locationRepo.insert(location)
          .then(() => {
            console.log(`Cached Location: ${location.address} ${location.latitude} ${location.longitude}.`);
            resolve(location);
          });
      } else {
        console.error(`ERROR: ${address} = `, err);
        reject(err);
      }
    });
  });
}

async function geocodeAddresses (addresses: string[]): Promise<any> {
  return Promise.all(_.uniq(addresses.map(normalizeAddress)).map(await geocodeAddress));
}

async function activeBusinessLicenseImport (): Promise<number> {
  return getManager().transaction(async transactionalEntityManager => {
    const repository = transactionalEntityManager.getRepository(ActiveBusinessLicense);
    await repository.clear();
    const request = https.get("https://www.denvergov.org/media/gis/DataCatalog/active_business_licenses/csv/active_business_licenses.csv");
    const entitySaves = [];
    let rowCount = 0;
    return new Promise((resolve, reject) => {
      request.on("response", (incomingMessage) => {
        const csvStream = incomingMessage.pipe(
          Papa.parse(
            Papa.NODE_STREAM_INPUT,
            {
              dynamicTyping: true,
              header: true
            }
          )
        );
        csvStream.on("data", function (row) {
          const i = rowCount;
          rowCount += 1;
          const entity = activeBusinessLicenseRowToEntity(row);
          entitySaves.push(
            repository.insert(entity)
              .catch(error => console.error(i, error))
          );
        });
        csvStream.on("end", function () {
          Promise.all(entitySaves)
            .then(() => {
              resolve(rowCount);
            })
            .catch(reject);
        });
      });
    });
  });
}

createConnection()
  .then(async connection => {
    const updated = await activeBusinessLicenseImport();
    console.log(`INSERTED ${updated} rows`);
    const updateLogRepo = getRepository(UpdateLog);
    const updateLog = new UpdateLog();
    updateLog.entity = ActiveBusinessLicense.name;
    await updateLogRepo.insert(updateLog);
    const addresses = (await getRepository(ActiveBusinessLicense).find()).map(abl => abl.establishmentAddress);
    await geocodeAddresses(addresses);
  })
  .catch(error => console.error(error));
