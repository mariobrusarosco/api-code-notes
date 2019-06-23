const helmet = require('helmet')
const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')

module.exports = app => {
  app.use(express.json())
  app.use(morgan('tiny'))
  app.use(helmet())
  app.use(cookieParser())
}
