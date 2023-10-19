const { Game } = require('../models');



const getAllGames = async (req, res) => {
    try {
        const games = await Game.find()
       return res.json(games)
    } catch (error) {
        return res.status(500).send(error.message);

    }
}

module.exports = {
    getAllGames,
}