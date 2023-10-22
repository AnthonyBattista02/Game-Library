const { Tag } = require('../models');

const getAllTags = async (req, res) => {
    try {
        const tags = await Tag.find()
        res.json(tags)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneTag(req, res) {
    try {
        const id = req.params.id
        const tag = await Tag.findById(id)
        if (tag) {
            return res.json(tag)
        }
        return res.status(404).send('Tag with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createTag(req,res) {
    try {
        const tag = await new tag (req.body)
        await tag.save()
        return res.status(201).json({
            tag
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateTag(req,res) {
    try {
        const id = req.params.id
        const tag = await Tag.findByIdAndUpdate(id, req.body, {new: true})
        if (tag) {
            return res.status(200).json(tag)
        }
        throw new Error('Tag was not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteTag(req,res) {
    try {
        const id = req.params.id
        const tag =  await Tag.findByIdAndDelete(id)
        if (tag) {
            return res.status(200).json(tag)
        }
        throw new Error('Tag was not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


module.exports = {
    getAllTags,
    getOneTag,
    createTag,
    updateTag,
    deleteTag
}