const mongoose = require('mongoose')

const isLocalEnv = process.env.NODE_ENV === 'local'
const credentials = isLocalEnv
  ? 'mongodb://localhost/local-code-notes'
  : process.env.DB_CREDENTIALS

module.exports = () => {
  mongoose
    .connect(credentials, { useNewUrlParser: true })
    .then(() => {
      console.log(`Connected to a mongo DB: ${credentials}`)
    })
    .catch(error => {
      new Error({ type: 'Mongo connection error', message: error })
    })
}
