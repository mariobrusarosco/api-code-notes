// Vendors
const Joi = require('@hapi/joi')
const bycrpt = require('bcrypt')
const { path } = require('ramda')

// Project's Config
const {
  errorsMap,
  USER_COOKIE_NAME,
  AUTHORIZATION_COOKIE_NAME
} = require('../../../config')

// Setting Validation
const { mountValidation, email, password } = require('../../../utils/validations')

// Creating a validation function
const emailAndPasswordValidation = mountValidation(email, password)

// Models
const User = require('../../../models/User')

const post = async (req, res, next) => {
  const bodyContent = path(['body'], req)

  const { error } = emailAndPasswordValidation(bodyContent)

  if (error) {
    return res.status(400).send(errorsMap['A06'])
  }

  const { email, password } = req.body
  /*
   * Exisitng User Verification
   */
  const returningUser = await User.findOne({ email })

  if (!returningUser) {
    return res.status(400).send(errorsMap['A06'])
  }
  /*
   * Password Verification
   */
  const returningUserPassword = await bycrpt.compare(password, returningUser.password)

  if (!returningUserPassword) {
    return res.status(400).send(errorsMap['A06'])
  }

  /*
   * Authorization Process
   */
  const AuthorizationToken = returningUser.generateAuthorizationToken()

  res.cookie(AUTHORIZATION_COOKIE_NAME, AuthorizationToken, {
    // expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    // secure: true,
    // httpOnly: true
  })

  /*
   * User Identification Process
   */
  const userToken = returningUser.generateUserIdToken()

  res.cookie(USER_COOKIE_NAME, userToken, {
    // expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
  })
  // res.header('UID', token)
  // res.header('Access-Control-Expose-Headers', 'UID')

  res.send(userToken)
}

module.exports = post
