const passport = require('../../../domain/auth/services/passport')

module.exports = passport.authenticate('google', { scope: ['profile', 'email'] })
