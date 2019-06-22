const mongoose = require('mongoose')
const LanguageSchema = require('./schema')

const Language = new mongoose.model('Language', LanguageSchema)


module.exports = Language
