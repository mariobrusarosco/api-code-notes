const logger = require('./logger')

const uncaughtExceptions = (() => {
  process.on('uncaughtException', exception => {
    logger.error(exception)
  })
})()

module.exports = uncaughtExceptions
