import "reflect-metadata";
import { createConnection, getManager, getRepository } from "typeorm";
import axios from "axios";
import * as _ from "lodash";
import * as csvParse from "csv-parse";
import { Stream } from "stream";
import * as googleMaps from "@google/maps";
import { Location, normalizeAddress } from "../entity/Location";
import { ActiveBusinessLicense } from "../entity/ActiveBusinessLicense";
import { activeBusinessLicenseRowToEntity } from "../mapper/ActiveBusinessLicenseMapper";
require("dotenv").config();

const googleMapsClient = googleMaps.createClient({
    key: process.env.GOOGLE_API_KEY,
    Promise
});

async function geocodeAddress(address: string): Promise<void> {
    if (!address) {
        return;
    }
    const locationRepo = getRepository(Location);
    const cachedLocation = await locationRepo.findOne({ address });
    if (cachedLocation) {
        return;
    }
    try {
        const response = await googleMapsClient.geocode({
            address
        }).asPromise();
        if (response.json.results.length === 0) {
            console.error(`Google found no location for "${address}".`);
            return;
        }
        const geometry = response.json.results[0].geometry.location;
        const location = new Location();
        location.address = address;
        location.latitude = geometry.lat;
        location.longitude = geometry.lng;
        await locationRepo.insert(location);
        console.log(`Location newly cached: ${location.address} ${location.latitude} ${location.longitude}.`);
    } catch (error) {
        console.error(`ERROR: ${address}`, error);
    }
}

async function geocodeAddresses(addresses: string[]): Promise<void> {
    for (const addressChunk of _(addresses).map(normalizeAddress).uniq().chunk(50).value()) {
        await Promise.all(addressChunk.map((address) => geocodeAddress(address)));
    }
}

function activeBusinessLicenseImport(): Promise<number> {
    return getManager().transaction(async transactionalEntityManager => {
        const repository = transactionalEntityManager.getRepository(ActiveBusinessLicense);
        await repository.clear();
        return new Promise(async (resolve, reject) => {
            const parser = csvParse({ columns: true, raw: true, cast: false });
            const entitySaves = [];
            const response = await axios.request<Stream>({
                method: 'get',
                url: "https://www.denvergov.org/media/gis/DataCatalog/active_business_licenses/csv/active_business_licenses.csv",
                responseType: 'stream',
            });
            response.data
                .pipe(parser)
                .on("data", function (row) {
                    const { lines: lineNumber } = this.info;
                    const entity = activeBusinessLicenseRowToEntity(row.record);
                    entitySaves.push(
                        repository.insert(entity)
                            .catch(error => {
                                console.error(row);
                                console.error(lineNumber, error.message);
                            })
                    );
                })
                .on("end", function () {
                    Promise.all(entitySaves)
                        .then(() => {
                            resolve(this.info.records);
                        })
                        .catch(reject);
                });
        });
    });
}

async function run() {
    try {
        await createConnection()
        const updated = await activeBusinessLicenseImport();
        console.log(`INSERTED ${updated} rows`);
    }
    catch (error) {
        console.error(error);
    }
}

run()
