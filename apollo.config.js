require('dotenv').config();
const env = process.env;

module.exports = {
  client: {
    name: 'your-project-name',
    tagName: 'gql',
    includes: ['./src/**/*.{ts,tsx}'],
    service: {
      name: 'postgraphile',
      localSchemaFile: env.GRAPH_QL_SCHEMA,
    },
  },
};
