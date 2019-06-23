const logger = require('./logger')

const uncaughtExceptions = (() => {
  process.on('uncaughtException', exception => {
    logger.emerg(exception)
  })
})()

module.exports = uncaughtExceptions
