const shared = {
   "type": "postgres",
   "synchronize": false,
   "logging": [],
   "entities": [
      "src/entity/**/*.ts",
   ],
   "migrations": [
      "src/migration/**/*.ts",
   ],
   "subscribers": [
      "src/subscriber/**/*.ts",
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber",
   },
}

const development = {
   ...shared,
   "name": "development",
   "database": "denverdata",
   "host": "localhost",
   "username": "postgres",
   "password": "docker",
};

const production = {
   ...shared,
   "name": "production",
   "url": process.env.DATABASE_URL,
};

let selected;
switch (process.env.NODE_ENV) {
   case "production":
      selected = production;
      break;
   default:
      selected = development;
      break;
}

module.exports = [
   development,
   production,
   {
      ...selected,
      name: "",
   }
]