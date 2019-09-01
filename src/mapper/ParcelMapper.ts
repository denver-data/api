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
  return entity;
}
