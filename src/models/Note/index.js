const mongoose = require('mongoose')
const NoteSchema = require('./schema')

const Note = new mongoose.model('Note', NoteSchema)

module.exports = Note
