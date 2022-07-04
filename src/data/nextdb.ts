const PouchDB = require('pouchdb')

const Db = PouchDB.defaults({
  prefix: `${process.env.dir}/src/data/db/`,
  skip_setup: true,
})

export const jokes = new Db('jokes')
