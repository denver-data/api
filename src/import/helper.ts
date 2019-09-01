import "reflect-metadata";
import { getManager, Entity } from "typeorm";
import axios from "axios";
import * as csvParse from "csv-parse";
import { Stream } from "stream";

export const importCsv = <T> (model: Function, mapper: (row: Array<any>) => T, csvFile: string): Promise<number> => {
    return getManager().transaction(async transactionalEntityManager => {
        const repository = transactionalEntityManager.getRepository(model);
        await repository.clear();
        return new Promise(async (resolve, reject) => {
            const parser = csvParse({ columns: true, raw: true, cast: false });
            const entitySaves = [];
            const response = await axios.request<Stream>({
                method: 'get',
                url: csvFile,
                responseType: 'stream',
            });
            response.data
                .pipe(parser)
                .on("data", function (row) {
                    const { lines: lineNumber } = this.info;
                    // if (lineNumber > 120) return;
                    const entity = mapper(row.record);
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