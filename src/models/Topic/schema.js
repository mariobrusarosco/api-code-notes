// Vendors
const mongoose = require('mongoose')

const topicSchema = new mongoose.Schema({
  label: String
})

module.exports = topicSchema
