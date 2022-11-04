const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const mongoose = require('mongoose')

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.DRIVING_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('mongo DB success')
})

const Routes = require('./routes/index')
app.use('/api', Routes)

app.listen(port, () => {
  console.log(`Server is listenting at http://localhost:${port}`)
})

