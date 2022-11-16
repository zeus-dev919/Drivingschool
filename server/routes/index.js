const express = require('express')
const app = express()

const questionRoutes = require('./question');

app.use('/question', questionRoutes)

module.exports = app