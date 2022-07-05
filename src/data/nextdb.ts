import os from 'os'
import path from 'path'

const tmp = os.tmpdir()
const pathx = path.normalize(`${tmp}/demo.db`)
console.log('=====================', pathx, '=====================')

/* eslint-disable func-names */
const PouchDB = require('pouchdb')

const Db = PouchDB.defaults({
  prefix: `${path.resolve(process.cwd(), 'src', 'data', 'db')}/`,
  skip_setup: true,
})

export const jokes = new Db(
  process.env.VERCEL ? 'http://klounlol.herokuapp.com/jokes' : 'jokes'
)
// test
