const { createLogger, format, transports, config } = require('winston')
const { combine, timestamp, colorize, prettyPrint, json } = format

const logLevelsConfig = { levels: config.syslog.levels }

const fileLogFormat = combine(
  timestamp({
    format: 'MM-DD-YYYY HH:mm:ss'
  }),
  json()
)

const consoleLogFormat = combine(
  timestamp({
    format: 'MM-DD-YYYY HH:mm:ss'
  }),
  prettyPrint({ colorize: true }),
  colorize({ all: true })
)

const fileLogger = createLogger({
  ...logLevelsConfig,
  format: fileLogFormat,
  transports: [
    new transports.File({ filename: 'logs/emerg.log', level: 'emerg' }),
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' })
  ],
  exceptionHandlers: [new transports.File({ filename: 'logs/exceptions.log' })],
  exitOnError: false
})

const consoleLogger = createLogger({
  format: consoleLogFormat,
  transports: [new transports.Console()],
  exceptionHandlers: [new transports.Console()]
})

module.exports = { fileLogger, consoleLogger }
