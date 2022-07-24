/* eslint-disable no-underscore-dangle */
/* eslint-disable prettier/prettier */
import fetch from 'cross-fetch';
import fs from 'fs';
import pkg from 'lodash';

const { shuffle } = pkg;

const urlize = (string) => {
  return `${string}`.replace(/&#\d+;/gm, (s) => {
    return String.fromCharCode(s.match(/\d+/gm)[0]);
  });
};

const { chunk } = pkg;

const lastmod = '\t<lastmod>2022-07-22</lastmod>\n';

fetch('http://54.247.0.27/api/rest/others/structure/sitemaps')
  .then((res) => res.json())
  .then((data) => {
    const { jokes, news, business, jokeids } = data;
    const jokesmap = jokes
      .map((item) =>
        new Array(Math.round(item.count / 30))
          .fill(0)
          .map(
            (_, i) =>
              `\t<url>\n\t\t<loc>${urlize(
                `https://www.kloun.lol/cat/${item.cat}/${i + 1}/`
              )}</loc>\n\t\t<priority>0.11</priority>\n\t${lastmod}\t</url>`
          )
      )
      .flat();

    //
    const newsmap = new Array(Math.round(Number(news.aggregate.count) / 30))
      .fill(0)
      .map(
        (_, i) =>
          `\t<url>\n\t\t<loc>${urlize(
            `https://www.kloun.lol/news/${i + 1}/`
          )}</loc>\n\t\t<priority>0.11</priority>\n\t${lastmod}\t</url>`
      );

    //
    const businessmap = business
      .map((item) =>
        new Array(Math.round(item.count / 30))
          .fill(0)
          .map(
            (_, i) =>
              `\t<url>\n\t\t<loc>${urlize(
                `https://www.kloun.lol/business/${item.cat}/${i + 1}/`
              )}</loc>\n\t\t<priority>0.11</priority>\n\t${lastmod}\t</url>`
          )
      )
      .flat();

    const jokeidsmap = jokeids.map((item) => {
      const url = urlize(`https://www.kloun.lol/joke/${item._id}/`);
      return `\t<url>\n\t\t<loc>${url}</loc>\n\t\t<priority>0.11</priority>\n\t${lastmod}\t</url>`;
    });

    //

    const sitemap = chunk(
      shuffle([...jokesmap, ...businessmap, ...newsmap, ...jokeidsmap]),
      5500
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
        `<?xml version="1.0" encoding="utf-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${element.join(
          '\n'
        )}\n</urlset>`
      );
    });
  });
