const PORT = process.env.PORT || 9090
const express = require('express')
const cookieParser = require('cookie-parser')
const assetsCompression = require('express-static-gzip')

// App Setitngs
const app = express()
const config = require('./config')

// ERROR HANDLING PROCESS
require('./logging')()

// throw Error('Something failed')
const p = Promise.reject(new Error('aaaaaaaaaaaaa'))
//  .then(() => console.log('Done'))
// -------------- ERRORS HANDLING PROCESS --------------------- //

// DB
require('./db')()

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
require('./routes')(app)

// Handling errors related to Express
require('./middlewares/express')(app)

// if (process.env.NODE_ENV !== 'local') {
// Serving assets like main.css or main.js
// If this condition fits...code ends here!!
// app.use(
//   assetsCompression('dist', {
//     enableBrotli: true,
//     orderPreference: ['br']
//   })
// )
// app.use(express.static('dist'))

// If the server does not recognize a route... it's gonna serve index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'))
// })
// }

// Listener
app.listen(PORT, () => console.log(`Serving Code Notes at ${PORT}`))
