// Vendors and Libs
const express = require('express')
const Router = express.Router()

// ------- EMAIL AUTHENTICATION PROCESS
const POST_FOR_EMAIL_AUTHENTICATION = require('./post')
// POST
Router.post('/', POST_FOR_EMAIL_AUTHENTICATION)

// ------- GOOGLE AUTHENTICATION PROCESS
const GET_FOR_GOOGLE_CALLBACK = require('./google/callback')
const POST_FOR_GOOGLE_AUTHENTICATION = require('./google/post')
// GET
Router.get('/google/callback', GET_FOR_GOOGLE_CALLBACK)
// POST
Router.post('/google', POST_FOR_GOOGLE_AUTHENTICATION)

module.exports = Router
