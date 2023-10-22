const db = require('./db')
const express = require('express')
const cors = require('cors')
const logger = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001

const gamesController = require('./controllers/gamesController.js')
const tagsController = require('./controllers/tagsController.js')
const publishersController = require('./controllers/publishersController.js')

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('This is Groot!')
})

app.get('/games', gamesController.getAllGames)
app.get('/tags', tagsController.getAllTags)
app.get('/publishers', publishersController.getAllPublishers)

app.get('/games/:id', gamesController.getOneGame)
app.get('/tags/:id', tagsController.getOneTag)
app.get('/publishers/:id', publishersController.getOnePublisher)

app.post('/games', gamesController.createGame)
app.post('/tags', tagsController.createTag)
app.post('/publishers', publishersController.createPublisher)

app.put('/games/:id', gamesController.updateGame)
app.put('/tags/:id', tagsController.updateTag)
app.put('/publishers/:id', publishersController.updatePublisher)

app.delete('/games/:id', gamesController.deleteGame)
app.delete('/tags/:id', tagsController.deleteTag)
app.delete('/publishers/:id', publishersController.deletePublisher)


app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })