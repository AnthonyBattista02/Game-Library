const { Schema } = require('mongoose')

const gameSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    achievements: { type: Number, required: true },
    imageURL:  { type: String, required: true },
    publisher: [{ type: String, ref: 'Publisher', required: true }],
    tags: [{ type: Array, ref: 'Tag', required: true }]
  },
  { timestamps: true }
)

module.exports = gameSchema