const express = require('express')
const morgan = require('morgan')
const { urlencoded } = require('express')

const app = express()

const routes = require('./routes')


app.set('port', process.env.PORT || 8000)
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))
app.use('/practica1',routes)

module.exports = app