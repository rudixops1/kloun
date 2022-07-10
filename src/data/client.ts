import { ApolloClient, InMemoryCache } from '@apollo/client'

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
  },
  query: {
    fetchPolicy: 'no-cache',
  },
} as any
const client = new ApolloClient({
  ssrMode: true,
  uri: 'https://db.up.railway.app/v1/graphql',
  cache: new InMemoryCache(),
  defaultOptions,
})

export default client
