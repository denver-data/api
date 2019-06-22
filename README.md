# Database, CSV importer, and GraphQL for http://api.denverdata.org/

## Setup

Prereqs:
* Node 8+
* PostgreSQL
* A configured `ormconfig.json`.

```sh
npm install
npm run db:migrate
```

## Importing Data

```sh
npm run import:active-business-license
```

## Running an Apollo Server

```sh
npm start
```
