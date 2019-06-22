const options = {
  local: require('./local'),
  development: require('./development'),
  production: require('./production'),
}

const appConfig = {
  ...options[process.env.NODE_ENV],
  ...require('./common'),
}

module.exports = appConfig
