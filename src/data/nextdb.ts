/* eslint-disable func-names */
const PouchDB = require('pouchdb')

const Db = PouchDB.defaults({
  prefix: process.env.PORT
    ? '/app/src/data/db/'
    : `${process.env.dir}/src/data/db/`,
  skip_setup: true,
})

export const jokes = new Db('jokes')
if (process.env.PORT) {
  jokes
    .compact()
    .then((info: any) => {
      console.log(info)
    })
    .catch((err: any) => {
      console.log(err)
    })
}
