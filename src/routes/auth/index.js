// Vendors and Libs
const express = require('express')
const Router = express.Router()

// METHODS
const POST = require('./POST')

Router.post('/', POST)

module.exports = Router
