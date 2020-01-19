import { ApolloServer } from "apollo-server-koa";
import * as Koa  from "koa";
import * as cors from "@koa/cors";
import { merge } from "lodash";

import { sitePlanSchema } from "./sitePlanSchema";

const PORT = process.env.PORT ?? 4000;

const defaultTypeDef = `
  enum SortDirection {
    ASC
    DESC
  }

  enum SchemaValueType {
    Int
    Float
    Date
    String
  }

  enum CriteriaType {
    NotNull
    Exactly
    LessThanOrEqual
    GreaterThanOrEqual
    Between
    EqualTo
    Contains
  }
  input FilterCriteria {
    kind: SchemaValueType!
    type: CriteriaType!
    ints: [Int]
    floats: [Float]
    dates: [Float]
    strings: [String]
  }

  type Query { _empty: String }
`;

const defaultResolvers = {};

(async () => {
  const schemas = await Promise.all([
    sitePlanSchema()
  ]);
  const apolloServer = new ApolloServer({
    typeDefs: [defaultTypeDef, ...schemas.map(s => s.typeDef)],
    resolvers: merge(defaultResolvers, ...schemas.map(s => s.resolvers)),
  });
  const app = new Koa();
  app.use(cors());
  apolloServer.applyMiddleware({ app });
  app.use(ctx => {
    ctx.body = `This is the Denver Data API.`;
  });
  app.listen({
      port: PORT
    },
    () => {
      console.log(`🚀 HTTP Server ready at http://localhost:${PORT}`)
      console.log(`🚀 Apollo Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`)
    }
  );
})();
