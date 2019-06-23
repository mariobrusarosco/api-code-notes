const mongoose = require('mongoose')

module.exports = () => {
  mongoose
    .connect(process.env.DB_CREDENTIALS, { useNewUrlParser: true })
    .then(() => {
      console.log('Connected to a mongo DB')
    })
    .catch(error => {
      new Error({ type: 'Mongo connection error', message: error })
    })
}
