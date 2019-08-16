import { CampaignContribution } from '../entity/CampaignContributionEntity'
import * as _ from 'lodash'

export function campaignContributionRowToEntity (row): CampaignContribution {
  const entity = new CampaignContribution()
  const data = _.flatten(Object.keys(row).map(k => row[k]))
  if (row.__parsed_extra && row.__parsed_extra.length > 4) {
    throw new Error(data.join(','))
  }
  entity.date = row['Date']
  entity.campaignName = row['Campaign Name']
  entity.amount = parseFloat(row['Amount'])
  entity.organization = row['Organization']
  entity.contributorLastName = row['Contributor Last Name']
  entity.contributorMiddleName = row['Contributor Middle Name']
  entity.contributorFirstName = row['Contributor First Name']
  entity.employer = row['Employer']
  entity.occupation = row['Occupation']
  entity.address = row['cpf_cntrb_info_res_address']
  entity.cityId = row['city_id']
  entity.stateId = row['state_id']
  entity.zipId = row['zip_id']
  entity.campaignType = row['Campaign Type']
  entity.race = row['Race']
  entity.districtNumber = row['District Number']
  return entity
}
