import "reflect-metadata";
import { createConnection } from "typeorm";
import * as _ from "lodash";
import { RealPropertySaleAndTransfer } from "../entity/RealPropertySaleAndTransfer";
import { realPropertySaleAndTransferRowToEntity } from "../mapper/RealPropertySaleAndTransferMapper";
import { importCsv } from "./helper"
require("dotenv").config();

const ENTITY = RealPropertySaleAndTransfer;
const MAPPER = realPropertySaleAndTransferRowToEntity;
const CSV_FILE = "https://www.denvergov.org/media/gis/DataCatalog/real_property_sales_and_transfers/csv/real_property_sales_and_transfers.csv";

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
