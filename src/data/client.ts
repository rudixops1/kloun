import { ApolloClient, InMemoryCache } from '@apollo/client'

export const GRAPH_URL = 'http://34.242.41.16:80'

const client = new ApolloClient({
  ssrMode: true,
  uri: `${GRAPH_URL}/v1/graphql`,
  cache: new InMemoryCache(),
})
// const client2 = new ApolloClient({
//   ssrMode: true,
//   link: new HttpLink({
//     uri: `${GRAPH_URL}/v1/graphql`,
//     fetch,
//   }),
//   cache: new InMemoryCache(),
//   defaultOptions,
// })

export default client
