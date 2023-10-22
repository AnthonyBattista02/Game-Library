const { Game } = require('../models');



const getAllGames = async (req, res) => {
    try {
        const games = await Game.find()
        
       return res.json(games)
    } catch (error) {
        return res.status(500).send(error.message);

    }
}

async function getOneGame(req, res) {
    try {
        const id = req.params.id
        const game = await Game.findById(id)
        if (game) {
            return res.json(game)
        }
        return res.status(404).send('Game with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createGame(req,res) {
    try {
        const game = await new game (req.body)
        await game.save()
        return res.status(201).json({
            game
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateGame(req,res) {
    try {
        const id = req.params.id
        const game = await Game.findByIdAndUpdate(id, req.body, {new: true})
        if (game) {
            return res.status(200).json(game)
        }
        throw new Error('Game not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteGame(req,res) {
    try {
        const id = req.params.id
        const game =  await Game.findByIdAndDelete(id)
        if (game) {
            return res.status(200).json(game)
        }
        throw new Error('Game not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


module.exports = {
    getAllGames,
    getOneGame,
    createGame,
    updateGame,
    deleteGame
}