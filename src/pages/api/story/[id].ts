import Jimp from 'jimp/es'
import type { NextApiRequest, NextApiResponse } from 'next'

import { jokes } from '@/data/nextdb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query
  const joke = await jokes.get(id)
  if (joke) {
    const image = new Jimp(300, 530, 'white')

    Jimp.loadFont(
      `https://raw.githubusercontent.com/arpecop/kloun/main/public/font.fnt`
    )
      .then((font) => {
        image.print(
          font,
          10,
          10,
          `Not the answer you're looking for? Browse other questions tagged with #kloun`,
          285
        )
        return image
      })
      .then((image1) => {
        image1.getBuffer(Jimp.MIME_PNG, (_, buffer) => {
          res.setHeader('Content-Type', 'image/png')
          res.end(buffer)
        })
      })
  } else {
    res.status(404).json({ error: 'Not found' })
  }
}
