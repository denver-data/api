import { ActiveBusinessLicense } from '../entity/ActiveBusinessLicense'
import * as _ from 'lodash'

export function activeBusinessLicenseRowToEntity (row): ActiveBusinessLicense {
  const entity = new ActiveBusinessLicense()
  const data = _.flatten(Object.keys(row).map(k => row[k]))
  if (row.__parsed_extra && row.__parsed_extra.length > 4) {
    throw new Error(data.join(','))
  }
  entity.bfn = row['BFN']
  entity.licenseType = row['LICENSE_TYPE']
  entity.licenseStatus = row['LICENSE_STATUS']
  entity.licenseSubType = row['LICENSE_SUB_TYPE']
  entity.expirationDate = new Date(row['EXPIRATION_DATE'])
  entity.entityName = row['ENTITY_NAME']
  entity.establishmentAddress = row['ESTABLISHMENT_ADDRESS']
  return entity
}
