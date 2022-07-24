import type { DefaultOptions } from '@apollo/client';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const GRAPH_URL = 'http://54.247.0.27';

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
});
const client = new ApolloClient({
  ssrMode: true,
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions,
});

export default client;
