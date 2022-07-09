import os from 'os'
import path from 'path'

const tmp = os.tmpdir()

/* eslint-disable func-names */
const PouchDB = require('pouchdb-node')

const Db = PouchDB.defaults({
  prefix: `${path.resolve(
    process.env.ONLYVERCEL ? tmp : process.cwd(),
    'src',
    'data',
    'db'
  )}/`,
  // skip_setup: true,
})

export const news = new Db(
  process.env.ONLYVERCEL ? 'http://klounlol.herokuapp.com/news' : 'news'
)

export const jokes = new Db(
  process.env.ONLYVERCEL ? 'http://klounlol.herokuapp.com/jokes' : 'jokes'
)

console.log(jokes.adapter)
