// Vendors
const GoogleStrategy = require('passport-google-oauth20').Strategy
const passport = require('passport')

// Utils
// const newUserViaGoogle = require('../../../../utils/signup/newUserViaGoogle')
// Configuration
const { API_VERSION } = require('../../../config')
// Models
const User = require('../../../models/User')

passport.serializeUser((user, done) => {
  console.log(user)
  done(null, user.id)
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

// async function(accessToken, refreshToken, profile, done) {
//   // console.log({ accessToken, refreshToken, profile })

//   const firstname = profile.name.givenName
//   const lastname = profile.name.familyName
//   const email = profile.emails[0].value

//   const existingUser = await User.findOne({ 'authTypes.googleID': profile.id })

//   if (!existingUser) {
//     const newUser = new User({
//       firstname,
//       lastname,
//       email,
//       password: null,
//       authTypes: { googleID: profile.id }
//     })

//     // const result = await newUserViaGoogle(profile)
//     const savedNewUser = await newUser.save()
//     console.log({ savedNewUser })
//   }

//   console.log({existingUser})

//   // done(null, existingUser)
// }
