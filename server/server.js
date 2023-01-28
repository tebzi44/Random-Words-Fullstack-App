require('dotenv').config()
require('./db')
const express = require('express')
const signale = require('signale')
const bodyParser = require('body-parser')
const routes = require('./routes')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', routes)

app.listen(3044, ()=>{
    signale.success('Server started port: 3044')
})

