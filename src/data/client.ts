import { ApolloClient, InMemoryCache } from '@apollo/client'

export const GRAPH_URL =
  'http://ec2-34-242-41-16.eu-west-1.compute.amazonaws.com'

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
