const express = require('express')
const app = express()

const testRoutes = require('./problem');

app.use('/problem', testRoutes)

module.exports = app