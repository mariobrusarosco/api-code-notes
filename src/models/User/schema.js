const mongoose = require('mongoose')
const joi = require('joi')
const jwt = require('jsonwebtoken')

// Utils
const { userPublicData } = require('../../utils/User')

const userSchema = new mongoose.Schema({
  // Simple validation
  firstname: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 25
  },
  lastname: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 50
  },
  email: {
    unique: true,
    required: true,
    type: String,
    minlength: 7,
    maxlength: 255
  },
  password: {
    // required: true,
    type: String,
    minlength: 6,
    maxlength: 1024
  },
  username: String,
  authTypes: {
    googleID: {
      type: String,
      default: null
    },
    faceboookID: {
      type: String,
      default: null
    },
    twitterID: {
      type: String,
      default: null
    },
    githubID: {
      type: String,
      default: null
    }
  },
  emailVerified: {
    type: Boolean,
    default: false
  },
  lastAccess: {
    type: Date,
    default: Date.now()
  }
})

userSchema.methods.generateAuthorizationToken = function() {
  return jwt.sign({}, process.env.AUTHORIZATION_SECRET, {
    expiresIn: 10 * 60
  })
}

userSchema.methods.generateUserIdToken = function() {
  return jwt.sign(userPublicData(this), process.env.USER_TOKEN_SECRET, {
    expiresIn: 10 * 60
  })
}

module.exports = userSchema
