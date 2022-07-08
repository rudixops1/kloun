/* eslint-disable camelcase */
import fetch from 'node-fetch'

const token = process.env.FB_TOKEN
fetch('https://pouchdb.herokuapp.com/jokes/')
  .then(res => res.json())
  .then(json => {
    const { doc_count } = json
    const skip = Math.floor(Math.random() * doc_count)
    fetch(
      `https://klounlol.herokuapp.com/jokes/_all_docs?limit=3&skip=${skip}&include_docs=true`
    )
      .then(res => res.json())
      .then(json1 => {
        const { id } = json1.rows[0]
        const child_attachments = json1.rows.map(row => {
          return {
            link: `https://kloun.lol/joke/${row.id}/`,
            name: row.doc.cat,
            picture: `https://kloun.lol/api/story/${row.id}/`,
          }
        })

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
              og_action_type_id: '383635058339457',
              og_object_id: '140035382814582',
              og_icon_id: '202857099862987',
              child_attachments,
              actions: [
                {
                  link: `https://kloun.lol/joke/${id}/`,
                  name: 'Прочети',
                },
              ],
            }),
          }
        )
          .then(res => res.json())
          .then(json => {
            console.log(json)
          })
      })
  })
