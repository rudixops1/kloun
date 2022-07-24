import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'cross-fetch';

export const GRAPH_URL = 'http://54.247.0.27';

// const client = new ApolloClient({
//   ssrMode: true,
//   uri: `${GRAPH_URL}/v1/graphql`,
//   cache: new InMemoryCache(),
// });
const httpLink = new HttpLink({
  uri: `${GRAPH_URL}/v1/graphql`,
  fetch,
});
const client = new ApolloClient({
  ssrMode: false,
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
