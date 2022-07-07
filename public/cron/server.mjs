import fetch from 'node-fetch'

const token = process.env.FB_TOKEN
fetch('https://pouchdb.herokuapp.com/jokes/_all_docs')
  .then(res => res.json())
  .then(json => {
    const { total_rows } = json
    const skip = Math.floor(Math.random() * total_rows)
    fetch(`https://klounlol.herokuapp.com/jokes/_all_docs?limit=1&skip=${skip}`)
      .then(res => res.json())
      .then(json1 => {
        console.log(json1.rows)
        const { id } = json1.rows[0]
        console.log(id)
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
            }),
          }
        )
          .then(res => res.json())
          .then(json => {
            console.log(json)
          })
      })
  })
