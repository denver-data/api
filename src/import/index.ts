import "reflect-metadata";
import { createConnection, getManager } from "typeorm";
import { campaignContributionImport } from "./CampaignContributionImport";
import { LastUpdated } from "../entity/LastUpdated";

createConnection()
    .then(async connection => {
        const lastUpdatedRepository = getManager().getRepository(LastUpdated);
        const lastUpdated: LastUpdated = new LastUpdated();
        lastUpdated.campaignContributionRowsAdded = await campaignContributionImport();
        console.log(lastUpdated);
        lastUpdatedRepository.save(lastUpdated);
    })
    .catch(error => console.log(error));
