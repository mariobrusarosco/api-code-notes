const express = require('express')
// Auth Middleware
const authorization = require('../middlewares/authorization')
// Routes Error Handler Middleware
const expressErrorHandler = require('../middlewares/express')

const home = require('./home')
const auth = require('./auth')
const users = require('./users')
const me = require('./me')
const notes = require('./notes')
const modes = require('./modes')

module.exports = app => {
  app.use(express.json())
  app.use('/api/v1/auth', auth)
  app.use('/api/v1/users', users)
  app.use('/api/v1/me', me)
  app.use('/api/v1/notes', notes)
  app.use('/api/v1/modes', modes)
  app.use(expressErrorHandler)
}
