const express = require('express')
const passport = require('passport')
const Router = express.Router()

const EmailAndPassword = require('./email-and-password')
Router.post('/email', EmailAndPassword)

const GoogleAuth = require('./google')
const GoogleAuthCallback = require('./google/callback')

Router.get('/google', GoogleAuth)
Router.get('/google/callback', passport.authenticate('google'), GoogleAuthCallback)

module.exports = Router
