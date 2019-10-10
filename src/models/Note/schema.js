const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

// Schemas
// const userSchema = require('../User/schema')

const NoteSchema = new mongoose.Schema({
  description: String,
  topic: {
    type: ObjectId,
    ref: 'Topic'
  },
  content: String,
  user: {
    type: ObjectId,
    ref: 'User'
  },
  related_notes: {
    type: [ObjectId],
    ref: 'Note'
  },
  active: Boolean
})

module.exports = NoteSchema
