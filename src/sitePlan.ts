import { get, createTypeDef } from './arcgisClient';

const TYPE = "ODC_PLAN_SITEDEVPLANS_A/FeatureServer/105";

const createResolvers = () => {
  return {
    Query: {
      SitePlans: async (_obj, args) => {
        return await get(TYPE, args.count, args.offset, args.sortBy, args.filterBy)
      },
    },
  };
};

export const createSchema = async () => {
  return {
    typeDef: await createTypeDef("SitePlan", "SitePlans", TYPE),
    resolvers: createResolvers(),
  };
};
