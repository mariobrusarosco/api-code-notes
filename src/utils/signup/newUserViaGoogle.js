// Models
const User = require('../../models/User')

const newUserViaGoogle = async () => {
  debugger
  const newUser = new User({
    firstname,
    lastname,
    email,
    password: hashedPassword,
    // authTypes: {
    //   google: { id: 123312, email: ''}
    // }
    google
  })
}

module.exports = newUserViaGoogle
