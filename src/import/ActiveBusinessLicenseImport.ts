import "reflect-metadata";
import { createConnection, getManager } from "typeorm";
import * as Papa from "papaparse";
import * as https from "https";
import * as _ from "lodash";
import { ActiveBusinessLicense } from "../entity/ActiveBusinessLicense";
import { activeBusinessLicenseRowToEntity } from "../mapper/ActiveBusinessLicenseMapper";

export async function activeBusinessLicenseImport(): Promise<number> {
    return getManager().transaction(async transactionalEntityManager => {
        const repository = transactionalEntityManager.getRepository(ActiveBusinessLicense);
        await repository.clear();
        const request = https.get("https://www.denvergov.org/media/gis/DataCatalog/active_business_licenses/csv/active_business_licenses.csv");
        const entitySaves = [];
        let rowCount = 0;
        return new Promise((resolve, reject) => {
            request.on("response", (incomingMessage) => {
                var csvStream = incomingMessage.pipe(
                    Papa.parse(
                        Papa.NODE_STREAM_INPUT,
                        {
                            dynamicTyping: true,
                            header: true,
                        }
                    )
                );
                csvStream.on('data', function (row) {
                    const i = rowCount;
                    rowCount += 1;
                    const entity = activeBusinessLicenseRowToEntity(row);
                    entitySaves.push(
                        repository.insert(entity)
                            .catch(error => console.error(i, error))
                    );
                });
                csvStream.on('end', function () {
                    Promise.all(entitySaves)
                        .then(() => {
                            resolve(rowCount);
                        })
                        .catch(reject)
                })
            });
        });
    });
}

createConnection()
    .then(async connection => {
        try {
            let updated = await activeBusinessLicenseImport()
            console.log(`INSERTED ${updated} rows`);
        } catch (error) {
            console.error(error);
        }
    })
    .catch(error => console.error(error));