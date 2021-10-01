require('dotenv').config();
const env = process.env;

module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  plugins: ['graphql'],
  rules: {
    'graphql/template-strings': [
      'error',
      {
        env: 'apollo',
        tagName: 'gql',
        schemaJsonFilepath: env.GRAPH_QL_INTROSPECTION,
      },
    ],
  },
};
