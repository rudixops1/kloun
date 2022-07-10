import { gql } from '@apollo/client'
import type { NextApiRequest, NextApiResponse } from 'next'

import client from '@/data/client'

const TOTAL = gql`
  query MyQuery {
    jokes_aggregate {
      aggregate {
        count
      }
    }
  }
`

const DATA_QUERY = gql`
  query MyQuery($offset: Int!) {
    jokes(limit: 3, offset: $offset) {
      _id
      cat
      joke
    }
  }
`

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const total = await client.query({
    query: TOTAL,
  })

  const { data } = await client.query({
    query: DATA_QUERY,
    variables: {
      offset: Math.floor(
        Math.random() * total.data.jokes_aggregate.aggregate.count
      ),
    },
  })

  res.status(200).json(data.jokes)
}
