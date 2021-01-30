const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const MONGO_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017'
const CLIENT_URL = 'http://localhost:3000'

app.use(cors({ origin: CLIENT_URL }))

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

const phonesRouter = require('./routes/phones')
app.use(express.json())
app.use('/phones', phonesRouter)
app.listen(5000, () => console.log('Server Started'))