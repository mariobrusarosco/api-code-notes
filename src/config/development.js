const devConfiguration = {
  configType: 'development',
  AccessControlAllowOrigin: '*',
  // 'AccessControlAllowOrigin': 'dev-code-notes.herokuapp.com',
  API_ROOT: 'http://localhost:9090',
  GOOGLE_CALLBACK_URL: 'https://dev-code-notes.herokuapp.com/api/v1/auth/google/callback'
}

module.exports = devConfiguration
