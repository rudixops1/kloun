import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import fetch from 'cross-fetch'

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
  },
  query: {
    fetchPolicy: 'no-cache',
  },
} as any
// const client1 = new ApolloClient({
// ssrMode: true,
// uri: 'https://db.up.railway.app/v1/graphql',
// cache: new InMemoryCache(),
// defaultOptions,
// })
const client = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: 'http://34.244.15.176:8080/v1/graphql',
    fetch,
  }),
  cache: new InMemoryCache(),
  defaultOptions,
})

export default client
