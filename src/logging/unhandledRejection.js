const { fileLogger, consoleLogger } = require('../utils/logger')

const uncaughtExceptions = (() => {
  process.on('unhandledRejection', ex => {
    fileLogger.error(ex.message, ex)
    consoleLogger.error(ex.message, ex)

    setTimeout(() => {
      process.exit(1)
    }, 500)
  })
})()

module.exports = uncaughtExceptions
