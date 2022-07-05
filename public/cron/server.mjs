/* eslint-disable camelcase */
// curl -i -X POST "https://graph.facebook.com/v14.0/me/feed?link=https%3A%2F%2Fkloun.lol%2Fjoke%2F5743b656fc4106f815f97fa6171bcd78%2F&access_token=EAAGfAboWDWABAJl3ZCInlczVGAov7Gq7IZBdP2kEdjUT4hIpv7ZAFhoTgXnPmyT2jxT6Y05e493VZCDGJmvbS2B0av5YiOcNpE5V4kKX56EhTZBhUnPQrXSc09y000NOvvTbGyHzPZBtY6I9CpIFecgHEnJEFgPzOjn7uzf2GvO9WMPGr406LMTTDHZC3sx8j4muhuUh91PUlIPTsnHEdZCR"

import fetch from 'node-fetch'

const token =
  process.env.FBTOKEN ||
  'EAAGfAboWDWABAMtMB3WIS51wvjjUBDOC4wqSq2Sq40aqNYBk1IZAGz3ey4YdW0rN5NhFfawvTsXZANQZB2XwcPEX5nf5WVyJ1PZCMJ3LAyqURZCEwL77Tx5QdPTZAdnZBnHGTbBPbkLSFIu6M2DNWuwWxZB4nmnIZACbw1GVpEANkApVeenIi4iIKSvHTEOCqZAmaRMRjZBGQIMRwZDZD'

fetch('https://pouchdb.herokuapp.com/jokes/_all_docs')
  .then((res) => res.json())
  .then((json) => {
    const { total_rows } = json
    const settings = { limit: 1, skip: Math.floor(Math.random() * total_rows) }
    fetch('https://pouchdb.herokuapp.com/jokes/_all_docs', settings)
      .then((res) => res.json())
      .then((json1) => {
        const { id } = json1.rows[0]
        console.log(
          `https://graph.facebook.com/v14.0/me/feed?access_token=${token}`
        )
        fetch(
          `https://graph.facebook.com/v14.0/me/feed?access_token=${token}`,
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              link: `https://kloun.lol/joke/${id}/`,
            }),
          }
        )
          .then((res) => res.json())
          .then((json) => {
            console.log(json)
          })
      })
  })
