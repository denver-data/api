import { getData, createTypeDef, createResolvers } from './arcgisClient';

const TYPE = "ODC_PLAN_SITEDEVPLANS_A/FeatureServer/105";
const NAME = "SitePlan";
const NAME_PLURAL = "SitePlans";

export const sitePlanSchema = async () => {
  return {
    typeDef: await createTypeDef(TYPE, NAME, NAME_PLURAL),
    resolvers: createResolvers(TYPE, NAME_PLURAL),
  };
};
