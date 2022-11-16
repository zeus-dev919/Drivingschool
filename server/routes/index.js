const express = require('express')
const app = express()

const questionRoutes = require('./question');

app.use('/problem', questionRoutes)

module.exports = app