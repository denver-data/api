import "reflect-metadata";

import { createConnection, getRepository } from "typeorm";
import { ActiveBusinessLicenseResolver } from "../resolvers/ActiveBusinessLicenseResolver";
import * as TypeGraphQL from "type-graphql";
import { ApolloServer } from "apollo-server";

async function run() {
    try {
        const connection = await createConnection()
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