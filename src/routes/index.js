const express = require('express')
const Router = express.Router()

// Configuration
const { API_VERSION } = require('../config')
// Auth Middleware
const authorization = require('../middlewares/authorization')

const auth = require('./auth')
const users = require('./users')
const me = require('./me')
const notes = require('./notes')
const modes = require('./modes')

Router.use(`${API_VERSION}/auth`, auth)
// Router.use(`${API_VERSION}/users`, users)
// Router.use(`${API_VERSION}/me`, me)
// Router.use(`${API_VERSION}/notes`, notes)
// Router.use(`${API_VERSION}/modes`, modes)
// Router.use(`${API_VERSION}/users`, users)

module.exports = Router
