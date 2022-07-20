import { gql } from '@apollo/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import client from '@/data/client';

const DATA_QUERY = gql`
  query MyQuery($id: String!) {
    jokes_by_pk(_id: $id) {
      _id
      cat
      joke
    }
  }
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  const { data } = await client.query({
    query: DATA_QUERY,
    variables: { id }
  });

  res.status(200).json(data.jokes_by_pk);
}
