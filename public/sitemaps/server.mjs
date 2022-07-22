/* eslint-disable prettier/prettier */
import fetch from 'cross-fetch';
import fs from 'fs';
import pkg from 'lodash';

const { shuffle, chunk } = pkg;

fetch('http://db.kloun.lol/api/rest/others/structure/sitemaps')
  .then((res) => res.json())
  .then((data) => {
    const { jokes, news, business } = data;
    const jokesmap = jokes
      .map((item) =>
        new Array(Math.round(item.count / 30))
          .fill(0)
          .map(
            (_, i) =>
              `<url><loc>https://www.kloun.lol/cat/${item.cat.replace(
                / /g,
                '%20'
              )}/${i +
                1}/</loc><lastmod>2022-03-20</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>`
          )
      )
      .flat();

    const newsmap = new Array(Math.round(Number(news.aggregate.count) / 30))
      .fill(0)
      .map(
        (_, i) =>
          `<url><lastmod>2022-03-20</lastmod><changefreq>daily</changefreq><priority>1.0</priority><loc>https://www.kloun.lol/news/${i +
            1}/</loc></url>`
      );

    const businessmap = business
      .map((item) =>
        new Array(Math.round(item.count / 30))
          .fill(0)
          .map(
            (_, i) =>
              `<url><lastmod>2022-03-20</lastmod><changefreq>daily</changefreq><priority>1.0</priority><loc>https://www.kloun.lol/business/${item.cat.replace(
                / /g,
                '%20'
              )}/${i + 1}/</loc></url>`
          )
      )
      .flat();

    const sitemap = chunk(
      shuffle([...newsmap, ...jokesmap, ...businessmap]),
      1000
    );

    sitemap.forEach(async (element, i) => {
      fs.writeFileSync(
        `/Users/rudix/Desktop/kloun/public/sitemaps/out/sitemap${i + 1}.xml`,
        `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${element.join(
          ''
        )}</urlset></xml>`
      );
    });

    console.log(sitemap[0]);
  });
