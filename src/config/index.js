const env = process.env.NODE_ENV
const appConfig = {
  ...require('./common'),
  ...require(`./${env}`)
}

module.exports = appConfig
