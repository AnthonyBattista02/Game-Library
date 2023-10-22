const { Schema } = require('mongoose')

const tagSchema = new Schema(
  {
    tagName: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = tagSchema