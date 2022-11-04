const express =  require('express')
const app = express()

const problemRoutes = requrie('./problem');

app.use('/problem', problemRoutes)

module.exports = app