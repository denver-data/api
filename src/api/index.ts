import "reflect-metadata";

import { createConnection } from "typeorm";
import { ActiveBusinessLicenseResolver } from "../resolver/ActiveBusinessLicenseResolver";
import * as TypeGraphQL from "type-graphql";
import { ApolloServer } from "apollo-server";

const env = process.env.NODE_ENV || "development";

async function run() {
    try {
        const connection = await createConnection(env);
        const schema = await TypeGraphQL.buildSchema({
            validate: false,
            resolvers: [
                ActiveBusinessLicenseResolver
            ],
        });
        const server = new ApolloServer({ schema });
        const { url } = await server.listen(4000);
        console.log(`Server is running, GraphQL Playground available at ${url}`);
    } catch (error) {
        console.error(error);
    }
}

run();