/* eslint-disable prettier/prettier */
import fetch from 'cross-fetch';
import fs from 'fs';
import pkg from 'lodash';

const { shuffle, chunk } = pkg;

const date = '2022-07-21T06:23:27.145Z';

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
              `<url><loc>${new URL(
                `https://www.kloun.lol/cat/${item.cat}/${i + 1}/`
              )}</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>`
          )
      )
      .flat();

    const newsmap = new Array(Math.round(Number(news.aggregate.count) / 30))
      .fill(0)
      .map(
        (_, i) =>
          `<url><loc>https://www.kloun.lol/news/${i +
            1}/</loc><changefreq>daily</changefreq><priority>0.7</priority></url>`
      );

    const businessmap = business
      .map((item) =>
        new Array(Math.round(item.count / 30))
          .fill(0)
          .map(
            (_, i) =>
              `<url><loc>${new URL(
                `https://www.kloun.lol/business/${item.cat}/${i + 1}/`
              )}</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>`
          )
      )
      .flat();

    const sitemap = chunk(
      shuffle([...newsmap, ...jokesmap, ...businessmap]),
      1000
    );

    sitemap.forEach(async (element, i) => {
      console.log(element.join('\n'));
      fs.writeFileSync(
        `/Users/rudix/Desktop/kloun/public/sitemaps/out/sitemap${i + 1}.xml`,
        `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">${element.join(
          ''
        )}</urlset>`
      );
    });
  });
