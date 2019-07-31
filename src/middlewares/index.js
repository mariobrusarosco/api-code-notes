const helmet = require('helmet')
const express = require('express')
const morgan = require('morgan')
const passport = require('passport')
const cookieSession = require('cookie-session')
const cookieParser = require('cookie-parser')

module.exports = app => {
  app.use(express.json())
  // TODO Pass this section code to a separated file
  app.use(
    cookieSession({
      maxAge: 30 * 60 * 1000,
      keys: [process.env.USER_TOKEN_SECRET]
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(morgan('tiny'))
  app.use(helmet())
  // TODO Remove this middleware if cookie strategy works fine
  app.use(cookieParser())
}
