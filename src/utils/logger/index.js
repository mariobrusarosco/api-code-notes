const { createLogger, format, transports } = require('winston')
const { combine, timestamp, label, prettyPrint } = format

const logger = createLogger({
  format: combine(
    timestamp({
      format: 'MM-DD-YYYY HH:mm:ss'
    }),
    prettyPrint()
  ),
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' })
  ]
})

module.exports = logger
