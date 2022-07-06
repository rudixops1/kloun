const PouchDB = require('pouchdb')

const express = require('express')

const app = express()

const Db = PouchDB.defaults({ prefix: `${__dirname}/db/` })

app.use('/', require('express-pouchdb')(Db))

app.listen(process.env.PORT || 3001)
