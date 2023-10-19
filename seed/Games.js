const db = require('../db')
const { Tag, Publisher, Game } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createTags = async () => {
    const tags = [
        {
            name: "Souls-like",
            description: "funny little genre",
        },
        {
            name: "Strategy",
            description: "silly little genre",
        },
        {
            name: "Fighting",
            description: "violent little genre",
        },
        {
            name: "RPG",
            description: "violent little genre",
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
        {
            name: "Bethesda",
            imageURL: "/images/smartphone.jpg",
            founded: "Florida",
            equity: 2400,
            
        },
        {
            name: "Nintendo",
            imageURL: "/images/smartphone.jpg",
            founded: "Florida",
            equity: 2400,
            
        },
        {
            name: "FromSoftware",
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
        {
            name: "Mario Party",
            description: "Best party game created",
            achievements: 30,
            imageURL: "/images/smartphone.jpg",
            publisher: publishers.map((task) => task._id),
            tags: tags.map((task) => task._id)
            
        },
        {
            name: "Brawlhalla",
            description: "Best fighting game created",
            achievements: 10,
            imageURL: "/images/smartphone.jpg",
            publisher: publishers.map((task) => task._id),
            tags: tags.map((task) => task._id)
            
        },
        {
            name: "Skyrim",
            description: "Best role-playing game created",
            achievements: 124,
            imageURL: "/images/smartphone.jpg",
            publisher: publishers.map((task) => task._id),
            tags: tags.map((task) => task._id)
            
        },
        {
            name: "Bloodborne",
            description: "Best british game created",
            achievements: 30,
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