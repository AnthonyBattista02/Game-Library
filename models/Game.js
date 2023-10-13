const { Schema } = require('mongoose')
const { boolean } = require('webidl-conversions')

const gameSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    achievements: { type: Number, required: true },
    imageURL:  { type: String, required: true },
    publisher: [{ type: Schema.Types.ObjectId, ref: 'Publisher' }],
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }]
  },
  { timestamps: true }
)

module.exports = gameSchema