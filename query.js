const db = require('./db')
const { Tag, Publisher, Game } = require('./models')

const findAllTags = async () => {
  const tags = await Tag.find()
  console.log('All users:', tags)
}

const findAllPublishers = async () => {
  const publishers = await Publisher.find()
  console.log('All publishers:', publishers)
}

const findAllGames = async () => {
    const games = await Game.find()
    console.log('All games:', games)
}

const run = async () => {
  try {
    await findAllTags()
    await findAllPublishers()
    await findAllGames()
  } catch (error) {
    console.log(error)
  } finally {
    await db.close()
  }
}

run()