const express = require('express')

// Configuration
const { API_VERSION } = require('../config')
// Auth Middleware
const authorization = require('../middlewares/authorization')
// Routes Error Handler Middleware
const expressErrorHandler = require('../middlewares/express')

const auth = require('./auth')
const users = require('./users')
const me = require('./me')
const notes = require('./notes')
const modes = require('./modes')

const GoogleStrategy = require('passport-google-oauth20').Strategy
const passport = require('passport')
const Router = express.Router()
const User = require('../models/User')

// passport.initialize()

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user)
  })
})

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${API_VERSION}/auth/google/callback`
    },
    (accessToken, refreshToken, profile, done) => {
      const firstname = profile.name.givenName
      const lastname = profile.name.familyName
      const email = profile.emails && profile.emails[0].value

      User.findOne({ 'authTypes.googleID': profile.id }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser)
        } else {
          new User({
            firstname,
            lastname,
            email,
            password: null,
            authTypes: { googleID: profile.id }
          })
            .save()
            .then(user => done(null, user))
        }
      })
    }
  )
)

Router.get('/login', (req, res) => {
  res.send('login')
})

Router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

Router.get(
  '/api/v1/auth/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.redirect('/home')
  }
)

Router.get('/logout', (req, res) => {
  res.send('logout')
})

Router.use(`${API_VERSION}/auth`, auth)
Router.use(`${API_VERSION}/users`, users)
Router.use(`${API_VERSION}/me`, me)
Router.use(`${API_VERSION}/notes`, notes)
Router.use(`${API_VERSION}/modes`, modes)
Router.use(`${API_VERSION}/users`, users)

module.exports = Router
