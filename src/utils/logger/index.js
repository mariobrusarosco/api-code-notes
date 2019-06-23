const { createLogger, format, transports, config } = require('winston')
const { combine, timestamp, label, prettyPrint } = format

const logger = createLogger({
  levels: config.syslog.levels,
  format: combine(
    timestamp({
      format: 'MM-DD-YYYY HH:mm:ss'
    }),
    prettyPrint()
  ),
  transports: [
    new transports.File({ filename: 'emerg.log', level: 'emerg' }),
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' })
  ]
})

module.exports = logger
