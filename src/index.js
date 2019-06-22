const PORT = process.env.PORT || 9090
const express = require('express')
const cookieParser = require('cookie-parser')
const path = require('path')
const session = require('express-session')
const assetsCompression = require('express-static-gzip')

// App Setitngs
const app = express()
const config = require('../config')()

// -------------- ERRORS HANDLING PROCESS --------------------- //
// require('./utils/uncaughtExceptions')

// Logging Async Errors
require('express-async-errors')

// -------------- ERRORS HANDLING PROCESS --------------------- //

// --------------  DB --------------------- //--
const mongoose = require('mongoose')

mongoose
  .connect(process.env.DB_CREDENTIALS, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to a mongo DB')
  })
  .catch(error => {
    new Error({ type: 'Mongo connection error', message: error })
  })
// --------------  DB --------------------- //

// --------------  MIDDLEWARES --------------------- //
// Built In Middlewares
app.use(express.json())

// Third Party Middlewares
const helmet = require('helmet')
const morgan = require('morgan')

// app.use(morgan('combined', { stream: logger.stream }))
app.use(morgan('tiny'))
app.use(helmet())
app.use(cookieParser())

// Custom Middlewares
const authorization = require('./middlewares/authorization')

app.use(function(req, res, next) {
  // console.log('passed cookies in a request', req.cookies)

  res.header('Access-Control-Allow-Origin', config.AccessControlAllowOrigin)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin'
  )
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')

  // // For Authenticated Cookies
  //   res.cookie('username', '9', {
  //     expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
  //     secure: true,
  //     httpOnly: true
  //   })

  next()
})

// --------------  MIDDLEWARES --------------------- //

// ROUTES
const home = require('./routes/home')
const auth = require('./routes/auth')
const users = require('./routes/users')
const me = require('./routes/me')
const notes = require('./routes/notes')
const modes = require('./routes/modes')

// app.use('/', home)
app.use('/api/v1/auth', auth)
app.use('/api/v1/users', users)
app.use('/api/v1/me', me)
app.use('/api/v1/notes', notes)
app.use('/api/v1/modes', modes)

// Handling errors related to Express, like errors happened in An Express Route
const { expressErrorHandler } = require('./middlewares/express')

app.use(expressErrorHandler)

// if (process.env.NODE_ENV !== 'local') {
// Serving assets like main.css or main.js
// If this condition fits...code ends here!!
app.use(
  assetsCompression('dist', {
    enableBrotli: true,
    orderPreference: ['br']
  })
)
app.use(express.static('dist'))

// If the server does not recognize a route... it's gonna serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'))
})
// }

// Listener
app.listen(PORT, () => console.log(`Serving Code Notes at ${PORT}`))
