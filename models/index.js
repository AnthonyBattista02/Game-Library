const mongoose = require('mongoose')
const gameSchema = require('./Game')
const publisherSchema = require('./Publisher')
const tagSchema = require('./Tag')

const Game = mongoose.model('Game', gameSchema)
const Publisher = mongoose.model('Publisher', publisherSchema)
const Tag = mongoose.model('Tag', tagSchema)

module.exports = {
    Game,
    Publisher,
    Tag
}