const mongoose = require('mongoose')
const { DB_CREDENTIALS } = require('../config')

const isLocalEnv = process.env.NODE_ENV === 'local'
// const credentials = isLocalEnv
//   ? 'mongodb://localhost/local-code-notes'
//   : process.env.DB_CREDENTIALS

module.exports = () => {
  mongoose
    .connect(DB_CREDENTIALS, { useNewUrlParser: true })
    .then(() => {
      console.log('Connected to a mongo DB')
    })
    .catch(error => {
      console.warn(error)
      throw Error({ type: 'Mongo connection error', message: error })
    })
}
