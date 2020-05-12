// Vendors
const GoogleStrategy = require('passport-google-oauth20').Strategy
const passport = require('passport')
// const cookieSession = require('cookie-session')

// TODO
// Remove process.env calls

// Configuration
const config = require('../../../config')
const { GOOGLE_CALLBACK_URL } = config
// Utils
// const newUserViaGoogle = require('../../../../utils/signup/newUserViaGoogle')

// Models
// const User = require('../../../models/User')

passport.serializeUser((user, done) => {
  // done(null, user.id)
  console.log('serializeUser', user)
  done(null, user)
})

passport.deserializeUser(async (id, done) => {
  // User.findById(id).then(user => done(null, user))
  console.log('deserializeUser', id)
  done(null, id)
})

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_CALLBACK_URL
    },
    async (accessToken, refreshToken, profile, done) => {
      const firstname = profile.name.givenName
      const lastname = profile.name.familyName
      const email = profile.emails[0].value

      console.log({ accessToken, firstname, lastname, email }, 111111)
      done(null, {})

      // const existingUser = await User.findOne({ 'authTypes.google.id': profile.id })

      // if (existingUser) {
      //   console.log({ existingUser })
      //   done(null, existingUser)
      // } else {
      //   const newUser = await User({
      //     firstname,
      //     lastname,
      //     authTypes: {
      //       google: {
      //         id: profile.id,
      //         email,
      //         active: true
      //       }
      //     }
      //   })
      //   console.log('new user', newUser)

      //   const savedUser = await newUser.save()
      //   done(null, savedUser)
      //     .save()
      //     .then(user => done(null, user))
      // }
    }
  )
)

module.exports = passport
