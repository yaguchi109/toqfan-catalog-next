require('dotenv').config();
const env = process.env;

const http = require('http');
const { postgraphile } = require('postgraphile');

const db = `postgres://${env.POSTGRES_USER}:${env.POSTGRES_PASSWORD}@localhost:${env.POSTGRES_PORT}/${env.POSTGRES_DB}`;
const schema = 'public';

http
  .createServer(
    postgraphile(db, schema, {
      watchPg: true,
      retryOnInitFail: true,
      disableQueryLog: true,
      graphiql: true,
      enhanceGraphiql: true,
      simpleCollections: 'both',
      legacyRelations: 'omit',
      dynamicJson: true,
      graphqlRoute: env.POST_GRAPHILE_GRAPH_QL,
      graphiqlRoute: env.POST_GRAPHILE_GRAPHI_QL,
      exportGqlSchemaPath: env.GRAPH_QL_SCHEMA,
      sortExport: true,
    })
  )
  .listen(env.POST_GRAPHILE_PORT);
