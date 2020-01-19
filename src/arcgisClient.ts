import got from "got";

const BASE_URL = "https://services1.arcgis.com/zdB7qR0BtYrg0Xpl/ArcGIS/rest/services";

//INFO: https://developers.arcgis.com/documentation/common-data-types/field.htm
//INFO: https://graphql.org/learn/schema/#scalar-types
const esriFieldTypeToGraphQLType = (esriType: string) => {
  switch (esriType) {
    case "esriFieldTypeOID":
    case "esriFieldTypeString":
    case "esriFieldTypeGlobalID":
      return "String";
    case "esriFieldTypeInteger":
    case "esriFieldTypeSmallInteger":
      return "Int";
    case "esriFieldTypeSingle":
    case "esriFieldTypeDouble":
    case "esriFieldTypeDate":
      return "Float";
    default:
      throw new Error(`ESRI type not recognized: ${esriType}`);
  }
};

const esriFieldTypeToSchemaType = (esriType: string) => {
  switch (esriType) {
    case "esriFieldTypeOID":
    case "esriFieldTypeString":
    case "esriFieldTypeGlobalID":
      return "String";
    case "esriFieldTypeInteger":
    case "esriFieldTypeSmallInteger":
      return "Int";
    case "esriFieldTypeSingle":
    case "esriFieldTypeDouble":
      return "Float";
    case "esriFieldTypeDate":
      return "Date";
    default:
      throw new Error(`ESRI type not recognized: ${esriType}`);
  }
};

export const createTypeDef = async (type: string, name: string, namePlural: string) => {
  const metadata = await getMetadata(type);
  return `
    type ${name} {
      ${metadata.fields.map(f => `${f[0]}: ${f[1]}\n`)}
    }

    enum ${name}Column {
      ${metadata.fields.map(f => `${f[0]}\n`)}
    }

    type ${name}ColumnSchema {
      column: ${name}Column
      type: SchemaValueType
    }

    input ${name}Sort {
      column: ${name}Column
      direction: SortDirection
    }

    input ${name}Filter {
      column: ${name}Column
      criteria: FilterCriteria
    }

    input ${name}FilterGroup {
      filterGroups: [${name}Filter]
    }

    extend type Query {
      ${namePlural} (count: Int, offset: Int, sortBy: [${name}Sort], filterBy: [${name}FilterGroup]): [${name}]
      ${name}Count (filterBy: [${name}FilterGroup]): Int
      ${name}Schema: [${name}ColumnSchema]
    }
  `;
}

export const createResolvers = (type: string, name: string, namePlural: string) => {
  return {
    Query: {
      [namePlural]: async (_obj, args) => {
        return await getData(type, args.count, args.offset, args.sortBy, args.filterBy)
      },
      [`${name}Count`]: async (_obj, args) => {
        return await getCount(type, args.filterBy);
      },
      [`${name}Schema`]: async () => {
        return await getSchema(type)
      },
    },
  };
};

const transformSortByColumn = (sortByColumn) =>
  `${sortByColumn.column} ${sortByColumn.direction}`;

export const getMetadata = async (type: string) => {
  try {
    const response = await got.get(`${BASE_URL}/${type}?f=json`)
    const responseJson = JSON.parse(response.body);
    return {
      fields: responseJson.fields.map(f => [f.name, esriFieldTypeToGraphQLType(f.type)]),
    }
  } catch (error) {
    console.error(error);
  }
};

export const getCount = async (type: string, filterBy: string[] = []) => {
  try {
    const query = `OBJECTID IS NOT NULL`;
    const url = `${BASE_URL}/${type}/query?where=${query}&returnCountOnly=true&returnDistinctValues=true&f=json`;
    const response = await got.get(url);
    const responseJson = JSON.parse(response.body);
    return responseJson.count;
  } catch (error) {
    console.error(error);
  }
}

export const getData = async (type: string, count: number = 50, offset: number = 0, sortBy: string[] = [], filterBy: string[] = []) => {
  try {
    const query = `OBJECTID IS NOT NULL`;
    const returnGeometry = false;
    const url = `${BASE_URL}/${type}/query?where=${query}&outFields=*&returnGeometry=${returnGeometry}&returnDistinctValues=true&orderByFields=${sortBy.map(transformSortByColumn).join(",")}&resultRecordCount=${count}&resultOffset=${offset}&f=json`;
    const response = await got.get(url);
    const responseJson = JSON.parse(response.body);
    return responseJson.features.map(f => f.attributes);
  } catch (error) {
    console.error(error);
  }
}

export const getSchema = async (type) => {
  try {
    const response = await got.get(`${BASE_URL}/${type}?f=json`)
    const responseJson = JSON.parse(response.body);
    return responseJson.fields.map(f => ({
      column: f.name,
      type: esriFieldTypeToSchemaType(f.type)
    }));
  } catch (error) {
    console.error(error);
  }
}
