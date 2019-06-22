const jwt = require('jsonwebtoken')
const session = require('express-session')
const winston = require('winston')

// Project's Config
const { errorsMap, USER_COOKIE_NAME, AUTHORIZATION_COOKIE_NAME } = require('../../config')

const authorization = (req, res, next) => {
  // console.log('cookie: ', req.cookies[AUTHORIZATION_COOKIE_NAME])

  // Access denied if no AUTHORIZATION_COOKIE_NAME exists
  const token = req.cookies[AUTHORIZATION_COOKIE_NAME]

  if (!token) {
    return res.send(403, {
      name: 'NoProvidedToken',
      message: errorsMap['B01']
    })
  }

  // Decoding JWT stored in the 'AUTHORIZATION_COOKIE'
  let decode = null

  try {
    decode = jwt.verify(token, process.env.AUTHORIZATION_SECRET)
  } catch (error) {
    const { name, message } = error

    // If the JWT couldn't be varified... remove the cookie that stores the JWT
    if (name === 'TokenExpiredError') {
      return res
        .clearCookie(AUTHORIZATION_COOKIE_NAME)
        .clearCookie(USER_COOKIE_NAME)
        .status(403)
        .send({ name, message })
    }
  }

  next()
}

module.exports = authorization
