// Vendors
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      scope: 'profile',
      callbackURL: '/auth/google/callback'
    },
    function(accessToken, refreshToken, profile, cb) {
      // ...
      console.log({ accessToken })
    }
  )
)

const post = async (req, res, next) => {
  // const bodyContent = path(['body'], req)

  res.send('dev')
}

module.exports = post
