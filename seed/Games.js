const db = require('../db')
const { Tag, Publisher, Game } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createTags = async () => {
    const tags = [
        {
            name: "Souls-like",
            description: "funny little genre",
        },
    ]
    await Tag.insertMany(tags)
    console.log("tags created")
    return tags
}
const createPublishers = async () => {
    const publishers = [
        {
            name: "Ubisoft",
            imageURL: "/images/smartphone.jpg",
            founded: "Florida",
            equity: 2400,
            
        },
    ]
    await Publisher.insertMany(publishers)
    console.log("publishers created")
    return publishers
}
const CreateGamesWithAll = async (tags, publishers) => {
    const games = [
        {
            name: "Dark Souls",
            description: "Best game created",
            achievements: 24,
            imageURL: "/images/smartphone.jpg",
            publisher: publishers.map((task) => task._id),
            tags: tags.map((task) => task._id)
            
        },
    ]
    await Game.insertMany(games)
    console.log("games created")
    return games
}

const run = async() => {
    const tags = await createTags()
    const publishers = await createPublishers()
    await CreateGamesWithAll(tags, publishers)
    db.close()
}

run()