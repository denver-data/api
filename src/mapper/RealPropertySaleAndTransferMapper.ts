import { RealPropertySaleAndTransfer } from "../entity/RealPropertySaleAndTransfer";
import * as _ from "lodash";

function noneToNull(value) {
    return value === "None" ? null : value;
}

export function realPropertySaleAndTransferRowToEntity (row): RealPropertySaleAndTransfer {
  const entity = new RealPropertySaleAndTransfer();
  const data = _.flatten(Object.keys(row).map(k => row[k]));
  if (row.__parsed_extra) {
    throw new Error(data.join(","));
  }
  entity.PIN = noneToNull(row["SCHEDNUM"]);
  entity.PIN = noneToNull(row["RECEPTION_NUM"]);
  entity.PIN = noneToNull(row["INSTRUMENT"]);
  entity.PIN = noneToNull(row["SALE_YEAR"]);
  entity.PIN = noneToNull(row["SALE_MONTHDAY"]);
  entity.PIN = noneToNull(row["RECEPTION_DATE"]);
  entity.PIN = noneToNull(row["SALE_PRICE"]);
  entity.PIN = noneToNull(row["GRANTOR"]);
  entity.PIN = noneToNull(row["GRANTEE"]);
  entity.PIN = noneToNull(row["CLASS"]);
  entity.PIN = noneToNull(row["MKT_CLUS"]);
  entity.PIN = noneToNull(row["D_CLASS"]);
  entity.PIN = noneToNull(row["D_CLASS_CN"]);
  entity.PIN = noneToNull(row["NBHD_1"]);
  entity.PIN = noneToNull(row["NBHD_1_CN"]);
  entity.PIN = noneToNull(row["PIN"]);
  return entity;
}
