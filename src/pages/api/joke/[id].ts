import type { NextApiRequest, NextApiResponse } from 'next'

import { jokes } from '@/data/nextdb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query
  const joke = await jokes.get(id)
  if (joke) {
    res.status(200).json(joke)
  } else {
    res.status(404).json({ error: 'Not found' })
  }
}
