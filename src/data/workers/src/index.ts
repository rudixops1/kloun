/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */

export default {
  async fetch(): Promise<Response> {
    const response = await fetch('http://klounlol.herokuapp.com/jokes')
    const data = await response.json()
    return new Response(JSON.stringify(data), {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    })
  },
}
