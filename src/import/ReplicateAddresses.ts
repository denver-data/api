import "reflect-metadata";
import * as _ from "lodash";
import { createConnection, createConnections } from "typeorm";

import { Location } from "../entity/Location";

async function run () {
  const [herokuDb, localDb] = await createConnections([
    {
      name: "heroku",
      type: "postgres",
      url: "postgres://jqlcjksnlbqked:53bd9c38babdcc4f29fc39b90e4ce93c0dbce3ef9bf2f60db78c6c3a299d5557@ec2-107-20-185-16.compute-1.amazonaws.com:5432/dchl12mfi9id7i",
      extra: {
        ssl: true
      },
      entities: [
        "src/entity/Location.ts"
      ],
      synchronize: true
    },
    {
      name: "local",
      type: "postgres",
      database: "denverdata",
      host: "localhost",
      username: "postgres",
      password: "docker",
      entities: [
        "src/entity/Location.ts"
      ],
      synchronize: true
    }
  ]);
  const addresses = await localDb.getRepository(Location).find();
  console.log(addresses.length);
  const result = await herokuDb.getRepository(Location).insert(addresses);
  console.log(result);
}

run();
