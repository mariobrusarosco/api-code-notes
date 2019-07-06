const { fileLogger, consoleLogger } = require('../../utils/logger')

const expressErrorHandler = (error, req, res, next) => {
  const { message } = error

  fileLogger.error({ message, error })
  consoleLogger.error({ message, error })

  res.status(500).send('Internal Failure')
}

module.exports = expressErrorHandler
