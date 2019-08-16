import { getManager } from "typeorm";
import * as Papa from "papaparse";
import { CampaignContribution } from "../entity/CampaignContributionEntity";
import * as https from "https";
import { campaignContributionRowToEntity } from "../mapper/CampaignContributionMapper";

export async function campaignContributionImport (): Promise<number> {
  return getManager().transaction(transactionalEntityManager => {
    const campaignContributionRepository = transactionalEntityManager.getRepository(CampaignContribution);
    const request = https.get("https://www.denvergov.org/media/gis/DataCatalog/campaign_finance_reports/csv/contributions.csv");
    const entitySaves = [];
    let rowCount = 0;
    return new Promise((resolve): void => {
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
          rowCount += 1;
          const newCampaignContribution = campaignContributionRowToEntity(row);
          entitySaves.push(campaignContributionRepository.save(newCampaignContribution));
        });
        csvStream.on("end", function () {
          Promise.all(entitySaves)
            .then(() => {
              resolve(rowCount);
            });
        });
      });
    });
  });
}
