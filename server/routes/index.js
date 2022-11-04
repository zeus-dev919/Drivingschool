const express = require('express')
const app = express()

const problemRoutes = require('./problem');

app.use('/problem', problemRoutes)

module.exports = app