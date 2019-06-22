const PORT = process.env.PORT || 9090
const express = require('express')
const path = require('path')

// App Setitngs
const app = express()
const env = app.get('env')

// --------------  MIDDLEWARES --------------------- //

// Built In Middlewares
app.use(express.json())

// Third Party Middlewares
const helmet = require('helmet')
const morgan = require('morgan')

// Custom Middlewares
const logger = require('./middlewares/logger')
// app.use(logger)
// --------------  MIDDLEWARES --------------------- //

// --------------  DEBUGGING --------------------- //
const appDebuger = require('debug')('app:startup')
const dbDebuger = require('debug')('app:db')
// TO ACTIVE THOSE YOU NEEE to set ENV VARIABLES
// like... export DEBUG=app:startup
// this will enable appDebuger() to work
//  or like... export DEBUG=app:startup,app:db
// this will enable appDebuger() and dbDebugger() to work
// --------------  DEBUGGING --------------------- //

// --------------  CONFIGURATION --------------------- //

console.log('Environment: ', env)
// --------------  CONFIGURATION --------------------- //

// --------------  TEMPLATE ENGINES  --------------------- //
// app.set('view engine', 'pug')
// app.set('views', './views') // THIS IS THE DEFAULT BEHAVIOUR FOR PUG VIEWS
// app.set('views', './src')
// --------------  TEMPLATE ENGINES --------------------- //

// Developemtn only middlewares
// if (env === 'development') {
// app.use(helmet())
appDebuger('!!!!')
app.use(morgan('tiny'))
// }

// ROUTES
const users = require('./routes/users')
const notes = require('./routes/notes')
const home = require('./routes/home')
const languages = require('./routes/languages')

app.use('/', home)
app.use('/api/v1/users', users)
app.use('/api/v1/notes', notes)
app.use('/api/v1/languages', languages)

// DB
const mongoose = require('mongoose')
mongoose
  .connect(
		process.env.DB_CREDENTIALS,
		// 'mongodb://admin:ma240787@ds121222.mlab.com:21222/dev-code-notes',
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Connected to a mongo DB')
  })
  .catch(error => {
    new Error({ type: 'Mongo connection error', message: error })
  })





















const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  lastAccess: {
    type: Date,
    default: Date.now()
  },
  isPublished: Boolean
})

// This is a class!! You're creating a class...e model to be instantiated
const User = mongoose.model('Course', userSchema)

const saveUser = async () => {
  // This is a new instance of User class
  const newUser = new User({
    name: 'Mario Brusarosco',
    email: 'mariobrusarosco@gmail.com',
    isPublished: true
  })

  // Save in the DB. This is an asynchronous operation
  const insertedNewUser = await newUser.save()
  console.log(insertedNewUser)
}

// saveUser()

const getUser = async () => {
  const user = await User.find({
    name: 'Mario Brusarosco',
    isPublished: true
  })
    .limit(2)
    .sort({ lastAccess: -1 }) // 1 indicates Ascending... -1 Descending
    .select({
      lastAccess: 1
      // email: 1
    })
  console.log(user)
}
getUser()

// Listener
app.listen(PORT, () => console.log(`Serving Code Notes at ${PORT}`))
