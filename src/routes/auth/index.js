// Vendors and Libs
const express = require('express')
const Router = express.Router()
const passport = require('passport')

// ------- EMAIL AUTHENTICATION PROCESS
const POST_FOR_EMAIL_AUTHENTICATION = require('./post/')
Router.post('/', POST_FOR_EMAIL_AUTHENTICATION)

// ------- GOOGLE AUTHENTICATION PROCESS
const GOOGLE = require('./google')
const GOOGLE_CALLBACK = require('./google/callback')

Router.get('/google', GOOGLE)
Router.get('/google/callback', passport.authenticate('google'), GOOGLE_CALLBACK)

module.exports = Router
