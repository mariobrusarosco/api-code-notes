const PORT = process.env.PORT || 9090
const express = require('express')
const app = express()

// App Setitngs
const config = require('./config')

// Routes Error Handler Middleware
const expressErrorHandler = require('./middlewares/express')

// ERROR HANDLING PROCESS
require('./logging')()

// DB
require('./db')()

// MIDDLEWARES
require('./middlewares')(app)

app.use(function(req, res, next) {
  // console.log('passed cookies in a request', req.cookies)

  res.header('Access-Control-Allow-Origin', config.AccessControlAllowOrigin)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin'
  )
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')

  next()
})

// ROUTES
app.use(require('./routes'))
app.use(expressErrorHandler)
// require('./routes')(app)

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
