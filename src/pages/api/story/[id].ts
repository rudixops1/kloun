import { gql } from '@apollo/client';
import Jimp from 'jimp/es';
import type { NextApiRequest, NextApiResponse } from 'next';

import { formattedjoke } from '@/components/JokeText';
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
    variables: { id },
  });

  if (data.jokes_by_pk.joke) {
    const image = new Jimp(200, 200, '#232427');

    // client.photos.curated({ per_page: 1 }).then((photos) => {
    Jimp.read(`https://www.kloun.lol/logobottomsmall.png`).then(
      (background) => {
        // return background
        Jimp.loadFont(`https://www.kloun.lol/font.fnt`)
          .then((font) => {
            const splitted = formattedjoke(data.jokes_by_pk.joke).split('\n');
            let h = 50;
            splitted.forEach((line: string) => {
              image.print(font, 10, h, line, 180);
              h += Jimp.measureTextHeight(font, line, 180);
            });
            // image.blit(background, 10, 320)
            return image.resize(458, 458).blit(background, 190, 12);
          })
          .then((image1) => {
            image1.getBuffer(Jimp.MIME_PNG, (_, buffer) => {
              res.setHeader('Content-Type', 'image/png');
              res.end(buffer);
            });
          });
      }
    );
    // })
  } else {
    res.status(404).json({ error: 'Not found' });
  }
}
