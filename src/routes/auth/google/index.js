// Vendors
const GoogleStrategy = require('passport-google-oauth20').Strategy
const passport = require('passport')
const cookieSession = require('cookie-session')

// Configuration
const config = require('../../../config')
const { GOOGLE_CALLBACK_URL } = config
// Utils
// const newUserViaGoogle = require('../../../../utils/signup/newUserViaGoogle')

// Models
const User = require('../../../models/User')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  User.findById(id).then(user => done(null, user))
})

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_CALLBACK_URL
    },
    (accessToken, refreshToken, profile, done) => {
      const firstname = profile.name.givenName
      const lastname = profile.name.familyName
      const email = profile.emails[0].value

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

module.exports = passport.authenticate('google', { scope: ['profile', 'email'] })
