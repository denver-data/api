import got from "got";

const BASE_URL = "https://services1.arcgis.com/zdB7qR0BtYrg0Xpl/ArcGIS/rest/services";

//INFO: https://esri.github.io/spatial-framework-for-hadoop/json/com/esri/json/EsriFieldType.html
//INFO: https://graphql.org/learn/schema/#scalar-types
const esriFieldTypeToGraphQLType = (esriType: string) => {
  switch (esriType) {
    case "esriFieldTypeOID":
      return "ID";
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

export const createTypeDef = async (type: string, name: string, namePlural: string) => {
  const metadata = await getMetadata(type);
  return `
    type ${name} {
      ${metadata.fields.map(f => `${f[0]}: ${f[1]}\n`)}
    }

    enum ${name}_column {
      ${metadata.fields.map(f => `${f[0]}_ASC\n`)}
      ${metadata.fields.map(f => `${f[0]}_DESC\n`)}
    }

    extend type Query {
      ${namePlural} (count: Int, offset: Int, sortBy: [${name}_column], filterBy: [String]): [${name}]
      ${name}Count (filterBy: [String]): Int
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
      }
    },
  };
};

const transformSortByColumn = (sortByColumn) =>
  sortByColumn.replace(/_ASC$/, " ASC").replace(/_DESC$/, " DESC");

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
