const options = {
  local: require('./local'),
  development: require('./development'),
  production: require('./production')
}

const activeENV = options[process.env.NODE_ENV]

const appConfig = {
  ...activeENV,
  ...require('./common')
}

module.exports = appConfig
