import path from 'path'

/* eslint-disable func-names */
const PouchDB = require('pouchdb')

const Db = PouchDB.defaults({
  prefix: `${path.resolve(process.cwd(), 'src', 'data', 'db')}/`.replace(
    '/vercel/path0/',
    '/var/task/'
  ),
  skip_setup: true,
})

export const jokes = new Db('jokes')
// test
