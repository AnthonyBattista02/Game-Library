const db = require('./db')
const express = require('express')
const gamesController = require('./controllers/gamesController.js')
const cors = require('cors')
const logger = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('This is root!')
})

// app.get('/games', gamesController.getAllProducts)

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })