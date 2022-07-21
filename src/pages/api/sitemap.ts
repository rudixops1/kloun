import { gql } from '@apollo/client';
import { shuffle } from 'lodash';
import type { NextApiRequest, NextApiResponse } from 'next';

import client from '@/data/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data } = await client.query({
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    query: DATA,
  });
  const { jokes, news } = data;
  const jokesmap = jokes
    .map((item: any) =>
      new Array(Math.round(item.count / 30))
        .fill(0)
        .map(
          (_, i) =>
            `<loc>https://www.kloun.lol/cat/${item.cat.replace(/ /g, '%20')}/${
              i + 1
            }/</loc>`
        )
    )
    .flat();

  const newsmap = new Array(Math.round(Number(news.aggregate.count) / 30))
    .fill(0)
    .map((_, i) => `<loc>https://www.kloun.lol/news/${i + 1}/</loc>`);

  res.setHeader('Content-Type', 'text/xml');
  res.end(`<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
    ${shuffle([...newsmap, ...jokesmap]).join('\n')}
    </sitemap>
    </sitemapindex>`);
}

export const DATA = gql`
  query MyQuery {
    jokes: cats_count {
      cat
      count
    }
    news: newsbg_aggregate {
      aggregate {
        count
      }
    }
    business: companies_count {
      count
      cat: location
    }
  }
`;
