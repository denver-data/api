import { Parcel } from "../entity/Parcel";
import * as _ from "lodash";

function noneToNull(value) {
    return value === "None" ? null : value;
}

export function parcelRowToEntity (row): Parcel {
  const entity = new Parcel();
  const data = _.flatten(Object.keys(row).map(k => row[k]));
  if (row.__parsed_extra) {
    throw new Error(data.join(","));
  }
  entity.PIN = noneToNull(row["PIN"]);
  entity.PIN = noneToNull(row["SCHEDNUM"]);
  entity.PIN = noneToNull(row["MAPNUM"]);
  entity.PIN = noneToNull(row["BLKNUM"]);
  entity.PIN = noneToNull(row["PARCELNUM"]);
  entity.PIN = noneToNull(row["APPENDAGE"]);
  entity.PIN = noneToNull(row["PARCEL_SOURCE"]);
  entity.PIN = noneToNull(row["SYSTEM_START_DATE"]);
  entity.PIN = noneToNull(row["OWNER_NAME"]);
  entity.PIN = noneToNull(row["OWNER_ADDRESS_LINE1"]);
  entity.PIN = noneToNull(row["OWNER_ADDRESS_LINE2"]);
  entity.PIN = noneToNull(row["OWNER_ADDR_NBR_PREFIX"]);
  entity.PIN = noneToNull(row["OWNER_ADDR_NBR"]);
  entity.PIN = noneToNull(row["OWNER_ADDR_NBR_SUFFIX"]);
  entity.PIN = noneToNull(row["OWNER_STR_NAME_PRE_MOD"]);
  entity.PIN = noneToNull(row["OWNER_STR_NAME_PRE_DIR"]);
  entity.PIN = noneToNull(row["OWNER_STR_NAME_PRE_TYPE"]);
  entity.PIN = noneToNull(row["OWNER_STR_NAME"]);
  entity.PIN = noneToNull(row["OWNER_STR_NAME_POST_TYPE"]);
  entity.PIN = noneToNull(row["OWNER_STR_NAME_POST_DIR"]);
  entity.PIN = noneToNull(row["OWNER_STR_NAME_POST_MOD"]);
  entity.PIN = noneToNull(row["OWNER_UNIT_TYPE"]);
  entity.PIN = noneToNull(row["OWNER_UNIT_IDENT"]);
  entity.PIN = noneToNull(row["OWNER_CITY"]);
  entity.PIN = noneToNull(row["OWNER_STATE"]);
  entity.PIN = noneToNull(row["OWNER_ZIP"]);
  entity.PIN = noneToNull(row["SITUS_ADDRESS_ZIP"]);
  entity.PIN = noneToNull(row["SITUS_ADDRESS_LINE1"]);
  entity.PIN = noneToNull(row["SITUS_ADDRESS_LINE2"]);
  entity.PIN = noneToNull(row["SITUS_CITY"]);
  entity.PIN = noneToNull(row["SITUS_STATE"]);
  entity.PIN = noneToNull(row["SITUS_ZIP"]);
  entity.PIN = noneToNull(row["SITUS_ADDR_NBR"]);
  entity.PIN = noneToNull(row["SITUS_ADDR_NBR_SUFFIX"]);
  entity.PIN = noneToNull(row["SITUS_ADDR_NAME_PRE_MOD"]);
  entity.PIN = noneToNull(row["SITUS_ADDR_NAME_PRE_DIR"]);
  entity.PIN = noneToNull(row["SITUS_ADDR_NAME_PRE_TYPE"]);
  entity.PIN = noneToNull(row["SITUS_STR_NAME"]);
  entity.PIN = noneToNull(row["SITUS_STR_NAME_POST_TYPE"]);
  entity.PIN = noneToNull(row["SITUS_STR_NAME_POST_DIR"]);
  entity.PIN = noneToNull(row["SITUS_STR_NAME_POST_MOD"]);
  entity.PIN = noneToNull(row["SITUS_UNIT_TYPE"]);
  entity.PIN = noneToNull(row["SITUS_UNIT_IDENT"]);
  entity.PIN = noneToNull(row["TAX_DIST"]);
  entity.PIN = noneToNull(row["TAX_DIST"]);
  entity.PIN = noneToNull(row["IMPROVEMENT_VALUE"]);
  entity.PIN = noneToNull(row["IMPROVEMENTS"]);
  entity.PIN = noneToNull(row["PROP_CLASS"]);
  entity.PIN = noneToNull(row["TOTAL_VALUE"]);
  entity.PIN = noneToNull(row["LAND"]);
  entity.PIN = noneToNull(row["D_CLASS"]);
  entity.PIN = noneToNull(row["D_CLASS_CN"]);
  entity.PIN = noneToNull(row["DCL12"]);
  entity.PIN = noneToNull(row["ACT_ZONE"]);
  entity.PIN = noneToNull(row["IMP_AREA"]);
  entity.PIN = noneToNull(row["CCYRBLT"]);
  entity.PIN = noneToNull(row["ASAL_INSTR"]);
  entity.PIN = noneToNull(row["SALE_MONTHDAY"]);
  entity.PIN = noneToNull(row["SALE_YEAR"]);
  entity.PIN = noneToNull(row["SALE_PRICE"]);
  entity.PIN = noneToNull(row["RECEPTION_NUM"]);
  return entity;
}
