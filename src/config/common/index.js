// Project's Package JSON
const packageJSON = require('../../../package.json')

// Project's ErrorsMap
const errorsMap = require('./errorsMap')

const commonConfiguration = {
  APP_NAME: 'Code Notes',
  API_VERSION: '/api/v1',
  errorsMap,
  USER_COOKIE_NAME: 'P_U',
  AUTHORIZATION_COOKIE_NAME: 'P_A'
}

module.exports = commonConfiguration
