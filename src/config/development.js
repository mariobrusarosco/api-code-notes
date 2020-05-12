const devConfiguration = {
  AccessControlAllowOrigin: '*',
  // 'AccessControlAllowOrigin': 'dev-code-notes.herokuapp.com',
  API_ROOT: 'https://dev-api-code-notes.herokuapp.com/api/v1',
  GOOGLE_CALLBACK_URL: 'https://dev-api-code-notes.herokuapp.com/auth/google/callback',
  DB_CREDENTIALS:
    'mongodb+srv://mariobrusarosco:vngUQNkzRu9LUiKe@dev-code-notes-xfppy.mongodb.net/test?retryWrites=true&w=majority'
}

module.exports = devConfiguration
