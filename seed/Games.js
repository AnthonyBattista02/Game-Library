const db = require('../db')
const { Tag, Publisher, Game } = require('../models/index')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const tagsList = []
    const tags1 = await new Tag({
        tagName: "Souls-like",
        description: "funny little genre",
    })
    tagsList.push(tags1)
    tags1.save

    const tags2 = await new Tag({
        tagName: "Strategy",
        description: "silly little genre",
    })
    tagsList.push(tags2)
    tags2.save

    const tags3 = await new Tag({
        tagName: "Fighting",
        description: "violent little genre",
    })
    tagsList.push(tags3)
    tags3.save
    
    const tags4 = await new Tag({
        tagName: "RPG",
        description: "violent little genre",
    })
    tagsList.push(tags4)
    tags4.save

    const publishersList = []
    const publishers1 = await new Publisher({
        pubName: "Ubisoft",
        imageURL: "/images/smartphone.jpg",
        founded: "Florida",
        equity: 2400,
    })
    publishersList.push(publishers1)
    publishers1.save

    const publishers2 = await new Publisher({
        pubName: "Bethesda",
        imageURL: "/images/smartphone.jpg",
        founded: "Florida",
        equity: 2400,
    })
    publishersList.push(publishers2)
    publishers2.save

    const publishers3 = await new Publisher({
        pubName: "Nintendo",
        imageURL: "/images/smartphone.jpg",
        founded: "Florida",
        equity: 2400,
    })
    publishersList.push(publishers3)
    publishers3.save

    const publishers4 = await new Publisher({
        pubName: "FromSoftware",
        imageURL: "/images/smartphone.jpg",
        founded: "Florida",
        equity: 2400,
    })
    publishersList.push(publishers4)
    publishers4.save
   
    const gamesList = []
    const games1 = await new Game({
        name: "Dark Souls",
        description: "Best game created",
        achievements: 24,
        imageURL: "/images/smartphone.jpg",
        publisher: publishers1.pubName,
        tags: [tags1.tagName]
    })
    gamesList.push(games1)
    games1.save
    
    const games2 = await new Game({
        name: "Mario Party",
        description: "Best party game created",
        achievements: 30,
        imageURL: "/images/smartphone.jpg",
        publisher: publishers2.pubName,
        tags: [tags2.tagName]
    })
    gamesList.push(games2)
    games2.save

    const games3 = await new Game({
        name: "Brawlhalla",
        description: "Best fighting game created",
        achievements: 10,
        imageURL: "/images/smartphone.jpg",
        publisher: publishers3.pubName,
        tags: [tags3.tagName]
    })
    gamesList.push(games3)
    games3.save

    const games4 = await new Game({
        name: "Skyrim",
        description: "Best role-playing game created",
        achievements: 124,
        imageURL: "/images/smartphone.jpg",
        publisher: publishers4.pubName,
        tags: [tags4.tagName]
    })
    gamesList.push(games4)
    games4.save

    const games5 = await new Game({
        name: "Bloodborne",
        description: "Best british game created",
        achievements: 30,
        imageURL: "/images/smartphone.jpg",
        publisher: publishers1.pubName,
        tags: [tags1.tagName]
    })
    gamesList.push(games5)
    games5.save
    
    await Tag.insertMany(tagsList)
    await Publisher.insertMany(publishersList)
    await Game.insertMany(gamesList)
    
}

const run = async() => {
    await main()
    db.close()
}

run()