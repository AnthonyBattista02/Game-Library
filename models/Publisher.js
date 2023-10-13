const { Schema } = require('mongoose')

const publisherSchema = new Schema(
  {
    name: { type: String, required: true },
    imageURL:  { type: String, required: true },
    founded: { type: String, required: true },
    equity: { type: Number, required: true },
    
  },
  { timestamps: true }
)

module.exports = publisherSchema