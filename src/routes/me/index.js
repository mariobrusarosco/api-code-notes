const express = require('express')
const Router = express.Router()

// Middlewares
const authorization = require('../../middlewares/authorization')

// Models
const User = require('../../models/User')

Router.get('/', async (req, res) => {
  console.log(req.cookies)
  // TODO Send User Public Message
  // console.log(req.verifiedUser)
  // const userID = req.verifiedUser
  // const currentUser = await User.findById(userID).select('-password -authTypes -lastAccess')
  res.send(req.user)
})

module.exports = Router
