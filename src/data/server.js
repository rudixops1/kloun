const PouchDB = require('pouchdb-node')
const cors = require('cors')
const compression = require('compression')
const express = require('express')

const app = express()
app.use(cors())
app.use(compression())

const Db = PouchDB.defaults({ prefix: `${__dirname}/db/` })

app.use('/', require('express-pouchdb')(Db))

app.listen(process.env.PORT || 3001)
