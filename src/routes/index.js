const express = require('express')
const Router = express.Router()

// Configuration
const { API_VERSION } = require('../config')
// Auth Middleware
const authorization = require('../middlewares/authorization')

const users = require('./users')
const notes = require('./notes')
const modes = require('./modes')

Router.use(`${API_VERSION}/auth`, require('./auth'))
Router.use(`${API_VERSION}/me`, require('./me'))
// Router.use(`${API_VERSION}/users`, users)
// Router.use(`${API_VERSION}/notes`, notes)
// Router.use(`${API_VERSION}/modes`, modes)
// Router.use(`${API_VERSION}/users`, users)

module.exports = Router
