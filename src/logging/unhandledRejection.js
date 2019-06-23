const logger = require('../utils/logger')

const uncaughtExceptions = (() => {
  process.on('unhandledRejection', ex => {
    logger.error(ex.message, ex)

    setTimeout(() => {
      process.exit(1)
    }, 500)
  })
})()

module.exports = uncaughtExceptions
