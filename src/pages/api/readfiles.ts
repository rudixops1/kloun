import fs from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const dirRelativeToPublicFolder = 'img'

  const dir = path.resolve('./src/data', dirRelativeToPublicFolder)

  const filenames = fs.readdirSync(dir)

  const images = filenames.map((name) =>
    path.join('/', dirRelativeToPublicFolder, name)
  )

  res.statusCode = 200
  res.json(images)
}
