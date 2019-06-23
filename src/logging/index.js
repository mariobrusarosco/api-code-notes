module.exports = () => {
  // Log Instance
  require('../utils/logger')

  // Logging Async Errors on Express Layer
  require('express-async-errors')

  // Uncaught Exceptions Treatment
  require('./unhandledRejection')
}
