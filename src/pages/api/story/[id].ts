import Jimp from 'jimp/es'
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'

import { jokes } from '@/data/nextdb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query
  const joke = await jokes.get(id)

  if (joke) {
    const image = new Jimp(200, 200, '#1F2937')

    // client.photos.curated({ per_page: 1 }).then((photos) => {
    Jimp.read(`${path.resolve('./public')}/logobottom.png`).then(() => {
      // return background
      Jimp.loadFont(`${path.resolve('./public')}/font.fnt`)
        .then((font) => {
          const splitted = joke.joke.split('\n')
          let h = 10
          splitted.forEach((line: string) => {
            image.print(font, 10, h, line, 190)
            h += Jimp.measureTextHeight(font, line, 190)
          })
          // image.blit(background, 70, 320)
          return image.resize(458, 458)
        })
        .then((image1) => {
          image1.getBuffer(Jimp.MIME_PNG, (_, buffer) => {
            res.setHeader('Content-Type', 'image/png')
            res.end(buffer)
          })
        })
    })
    // })
  } else {
    res.status(404).json({ error: 'Not found' })
  }
}
