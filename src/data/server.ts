import * as PouchDB from 'pouchdb'

const express = require('express')

const app = express()

const Db = PouchDB.defaults({ prefix: `${__dirname}/db/` })

export const jokes = new Db('jokes')

app.use('/', require('express-pouchdb')(Db))

app.listen(3001)
