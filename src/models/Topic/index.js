const mongoose = require('mongoose')
const topicSchema = require('./schema')

const Topic = mongoose.model('Topic', topicSchema)

module.exports = Topic
