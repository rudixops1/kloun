import type { DefaultOptions } from '@apollo/client';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'cross-fetch';

export const GRAPH_URL =
  'http://ec2-54-247-0-27.eu-west-1.compute.amazonaws.com';

// const client = new ApolloClient({
//   ssrMode: true,
//   uri: `${GRAPH_URL}/v1/graphql`,
//   cache: new InMemoryCache(),
// });
const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

const httpLink = new HttpLink({
  uri: `${GRAPH_URL}/v1/graphql`,
  fetch,
});
const client = new ApolloClient({
  ssrMode: false,
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions,
});

export default client;
