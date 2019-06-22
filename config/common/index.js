// Project's Package JSON
const packageJSON = require('../../package.json')

const commonConfiguration = {
  APP_NAME: 'Code Notes',
  VERSION: packageJSON.version,
  API: {
    ROOT: 'api/v1'
  }
}

module.exports = commonConfiguration
