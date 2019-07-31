const mongoose = require('mongoose')
const userSchema = require('./schema')

// This is a class!! You're creating a class...a model to be instantiated
const User = mongoose.model('User', userSchema)

module.exports = User
