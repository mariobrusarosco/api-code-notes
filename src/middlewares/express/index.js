const logger = require('../../utils/logger')

const expressErrorHandler = (error, req, res, next) => {
  const { message } = error

  logger.error({ message, error })

  res.status(500).send('Internal Failure')
}

module.exports = {
  expressErrorHandler
}
