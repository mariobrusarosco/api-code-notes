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
    new transports.File({ filename: 'logs/emerg.log', level: 'emerg' }),
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' })
  ],
  exceptionHandlers: [new transports.File({ filename: 'logs/exceptions.log' })],
  exitOnError: false
})

module.exports = logger
