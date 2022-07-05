// http://localhost:3001/jokes/_design/api/_view/cat?reduce=true&group=true
import type { NextApiRequest, NextApiResponse } from 'next'

import { jokes } from '@/data/nextdb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query
  const joke = await jokes.get(id)
  if (joke) {
    res.status(200).json({})
  } else {
    res.status(404).json({})
  }
}
