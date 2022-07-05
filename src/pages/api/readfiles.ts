import fs from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const dir = path.resolve('./src/data')

  const filenames = fs.readdirSync(dir)

  const images = filenames.map((name) => path.join('/', name))

  res.statusCode = 200
  res.json(images)
}
