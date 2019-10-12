const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const R = require('ramda')

// Utils
const { userPublicData } = require('../../../utils/User')

// SubSchemas
const providerSchema = require('./providerSchema')

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
  username: String,
  authTypes: {
    emailAndPassword: {
      active: {
        type: Boolean,
        default: false
      },
      email: {
        unique: true,
        required: function() {
          return false
        },
        type: String,
        minlength: 7,
        maxlength: 255
      },
      password: {
        required: function() {
          return false
        },
        type: String,
        minlength: 6,
        maxlength: 1024
      }
    },
    google: providerSchema,
    twitter: providerSchema
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
