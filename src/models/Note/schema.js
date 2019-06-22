const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

// Schemas
// const userSchema = require('../User/schema')

const NoteSchema = new mongoose.Schema({
  description: String,
  language: String,
  content: String,
  // Population Example
  user: {
    type: ObjectId,
    ref: 'User'
  },
  // language: {
  //   type: ObjectId,
  //   ref: 'Language'
  // },
  related_notes: {
    type: [ObjectId],
    ref: 'Note'
  }
})

module.exports = NoteSchema
