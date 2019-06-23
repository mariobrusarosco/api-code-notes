const { createLogger, format, transports, config } = require('winston')
const { combine, timestamp, label, prettyPrint, json } = format

const logger = createLogger({
  levels: config.syslog.levels,
  format: combine(
    timestamp({
      format: 'MM-DD-YYYY HH:mm:ss'
    }),
    // json()
    prettyPrint()
  ),
  transports: [
    new transports.File({ filename: 'logs/emerg.log', level: 'emerg' }),
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' })
    // new transports.Console({ level: 'error' }),
  ],
  exceptionHandlers: [new transports.File({ filename: 'logs/exceptions.log' })],
  exitOnError: false
})

module.exports = logger
