const { Publisher } = require('../models');



const getAllPublishers = async (req, res) => {
    try {
        const publishers = await Publisher.find()
        res.json(publishers)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOnePublisher(req, res) {
    try {
        const id = req.params.id
        const publisher = await Publisher.findById(id)
        if (publisher) {
            return res.json(publisher)
        }
        return res.status(404).send('Publisher with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createPublisher(req,res) {
    try {
        const publisher = await new publisher (req.body)
        await publisher.save()
        return res.status(201).json({
            publisher
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updatePublisher(req,res) {
    try {
        const id = req.params.id
        const publisher = await Publisher.findByIdAndUpdate(id, req.body, {new: true})
        if (publisher) {
            return res.status(200).json(publisher)
        }
        throw new Error('Publisher was not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deletePublisher(req,res) {
    try {
        const id = req.params.id
        const publisher =  await Publisher.findByIdAndDelete(id)
        if (publisher) {
            return res.status(200).json(publisher)
        }
        throw new Error('Publisher was not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


module.exports = {
    getAllPublishers,
    getOnePublisher,
    createPublisher,
    updatePublisher,
    deletePublisher
}