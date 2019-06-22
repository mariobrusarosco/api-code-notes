// Vendors
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

const LanguageSchema = new Schema({
  name: String,
  user: {
    type: ObjectId,
    ref: 'User'
  },
})

module.exports = LanguageSchema
