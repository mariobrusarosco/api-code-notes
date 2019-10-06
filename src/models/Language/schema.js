// Vendors
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LanguagesSchema = new Schema({
  label: String
})

module.exports = LanguagesSchema
