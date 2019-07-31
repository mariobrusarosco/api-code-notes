// Vendors and Libs
const express = require('express')
const Router = express.Router()

// ------- EMAIL AUTHENTICATION PROCESS
// const POST_FOR_EMAIL_AUTHENTICATION = require('./post/')
// POST
// Router.post('/', POST_FOR_EMAIL_AUTHENTICATION)

// ------- GOOGLE AUTHENTICATION PROCESS
const GET_FOR_GOOGLE_AUTHENTICATION = require('./google')
const GET_FOR_GOOGLE_CALLBACK = require('./google/callback')

// GET
Router.get('/google', GET_FOR_GOOGLE_AUTHENTICATION)
Router.get('/google/callback', GET_FOR_GOOGLE_CALLBACK)

module.exports = Router

// ------------------
// // Vendor
// const GoogleStrategy = require('passport-google-oauth20').Strategy

// // Configuration
// const { API_VERSION } = require('../../config')

// Models
// const User = require('../../models/User')

// const passport = require('passport')
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: `${API_VERSION}/auth/google/callback`
//     },
//     async function(accessToken, refreshToken, profile, done) {
//       // console.log({ accessToken, refreshToken, profile })

//       const firstname = profile.name.givenName
//       const lastname = profile.name.familyName
//       const email = profile.emails[0].value

//       const existingUser = await User.findOne({ 'authTypes.googleID': profile.id })

//       if (!existingUser) {
//         const newUser = new User({
//           firstname,
//           lastname,
//           email,
//           password: null,
//           authTypes: { googleID: profile.id }
//         })

//         // const result = await newUserViaGoogle(profile)
//         const result = await newUser.save()
//         console.log({ result })
//       }

//       console.log({existingUser})

//       // done(null, existingUser)
//     }
//   )
// )

// Router.get(
// '/google',
// passport.authenticate('google', {
//   scope: ['profile', 'email']
// })
// )

// Router.get(
//   '/google/callback',
//   passport.authenticate('google')
// )
