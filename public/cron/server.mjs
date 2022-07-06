import fetch from 'node-fetch'

const token = process.env.FBTOKEN
fetch('https://pouchdb.herokuapp.com/jokes/_all_docs')
  .then(res => res.json())
  .then(json => {
    const { total_rows } = json
    const settings = { limit: 1, skip: Math.floor(Math.random() * total_rows) }
    fetch('https://pouchdb.herokuapp.com/jokes/_all_docs', settings)
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
