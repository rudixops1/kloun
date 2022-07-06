import fetch from 'node-fetch'

const token =
  process.env.FB_TOKEN ||
  'EAAGfAboWDWABAH3TwCAapcYYIq4TLp5T71sFb99xtZAQ3PaidkKy8CFMZBUJqIpcvaltwIDCKId1X1ePt4uhTvgbocRGjZCv0xVpw9i3GqZCsnxTM4KUu9d7oi3cuZA9i3Vyoq0UatXd9hKg9f9siIJs5yz1mxPrHsSvu8zbRXzxtniSkWqd3'
fetch('https://pouchdb.herokuapp.com/jokes/_all_docs')
  .then(res => res.json())
  .then(json => {
    const { total_rows } = json
    const settings = { limit: 1, skip: Math.floor(Math.random() * total_rows) }
    fetch('https://klounlol.herokuapp.com/jokes/_all_docs', settings)
      .then(res => res.json())
      .then(json1 => {
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
          .then(res => res.json())
          .then(json => {
            console.log(json)
          })
      })
  })
