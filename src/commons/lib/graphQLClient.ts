import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.GRAPH_QL_URI || '';
export const graphQLClient = new GraphQLClient(endpoint);
