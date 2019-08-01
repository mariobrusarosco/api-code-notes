const express = require('express')
const Router = express.Router()
const passport = require('passport')

Router.get('/', (req, res) => {
  req.logout()
  res.send()
})

module.exports = Router
