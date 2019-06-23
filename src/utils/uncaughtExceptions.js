const logger = require('./logger')

const uncaughtExceptions = (async () => {
  process.on('uncaughtException', exception => {
    logger.error(exception)
  })
})()

module.exports = uncaughtExceptions
