/* eslint-disable prettier/prettier */
import fetch from 'cross-fetch';
import fs from 'fs';
import pkg from 'lodash';

const { shuffle, chunk } = pkg;

const lastmod = '\t<lastmod>2022-07-22</lastmod>\n';

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
              `\t<url>\n\t\t<loc>${new URL(
                `https://www.kloun.lol/cat/${item.cat}/${i + 1}/`
              )}</loc>\n\t\t<priority>0.11</priority>\n\t${lastmod}\t</url>`
          )
      )
      .flat();
    const jokesmaptxt = jokes
      .map((item) =>
        new Array(Math.round(item.count / 30))
          .fill(0)
          .map(
            (_, i) =>
              `${new URL(`https://www.kloun.lol/cat/${item.cat}/${i + 1}/`)}`
          )
      )
      .flat();
    //
    const newsmap = new Array(Math.round(Number(news.aggregate.count) / 30))
      .fill(0)
      .map(
        (_, i) =>
          `\t<url>\n\t\t<loc>https://www.kloun.lol/news/${i +
            1}/</loc>\n\t\t<priority>0.11</priority>\n\t${lastmod}\t</url>`
      );
    const newsmaptxt = new Array(Math.round(Number(news.aggregate.count) / 30))
      .fill(0)
      .map((_, i) => `https://www.kloun.lol/news/${i + 1}/`);
    //
    const businessmap = business
      .map((item) =>
        new Array(Math.round(item.count / 30))
          .fill(0)
          .map(
            (_, i) =>
              `\t<url>\n\t\t<loc>${new URL(
                `https://www.kloun.lol/business/${item.cat}/${i + 1}/`
              )}</loc>\n\t\t<priority>0.11</priority>\n\t${lastmod}\t</url>`
          )
      )
      .flat();
    const businessmaptxt = business
      .map((item) =>
        new Array(Math.round(item.count / 30))
          .fill(0)
          .map(
            (_, i) =>
              `${new URL(
                `https://www.kloun.lol/business/${item.cat}/${i + 1}/`
              )}`
          )
      )
      .flat();
    //

    const sitemap = chunk(
      shuffle([...newsmap, ...jokesmap, ...businessmap]),
      1000
    );

    // const sitemaptxt = chunk(
    //   shuffle([...newsmaptxt, ...jokesmaptxt, ...businessmaptxt]),
    //   1000
    // );

    // sitemaptxt.forEach(async (element, i) => {
    //   fs.writeFileSync(
    //     `/Users/rudix/Desktop/kloun/public/sitemaps/out/${i + 1}.txt`,
    //     element.join('\n')
    //   );
    // });

    fs.writeFileSync(
      `/Users/rudix/Desktop/kloun/public/robots.txt`,
      `# *
User-agent: *
Allow: /
    
# Host
Host: https://www.kloun.lol
    
# Sitemaps\n${sitemap
        .map(
          (_, i) => `Sitemap: https://www.kloun.lol/sitemaps/out/${i + 1}.xml`
        )
        .join('\n')}`
    );

    sitemap.forEach(async (element, i) => {
      fs.writeFileSync(
        `/Users/rudix/Desktop/kloun/public/sitemaps/out/${i + 1}.xml`,
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${element.join(
          '\n'
        )}\n</urlset>`
      );
    });
  });
