import "reflect-metadata";
import { createConnection } from "typeorm";
import * as _ from "lodash";
import { Parcel } from "../entity/Parcel";
import { parcelRowToEntity } from "../mapper/ParcelMapper";
import { importCsv } from "./helper"
require("dotenv").config();

const ENTITY = Parcel;
const MAPPER = parcelRowToEntity;
const CSV_FILE = "https://www.denvergov.org/media/gis/DataCatalog/parcels/csv/parcels.csv";

async function run() {
    try {
        await createConnection()
        const updated = await importCsv(ENTITY, MAPPER, CSV_FILE);
        console.log(`INSERTED ${updated} rows`);
    }
    catch (error) {
        console.error(error);
    }
}

run()
