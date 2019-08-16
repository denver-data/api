import "reflect-metadata";
import { createConnections } from "typeorm";

import { Location } from "../entity/Location";

async function run (): Promise<void> {
  const [herokuDb, localDb] = await createConnections([
    {
      name: "heroku",
      type: "postgres",
      url: "SECRET",
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
