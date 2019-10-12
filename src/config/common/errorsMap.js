// Errors started with A: related about User Verification
// Errors started with B: related about Authorization, tokens and cookies
// Errors started with C: ...
// Errors started with D: ...
const errorsMap = {
  A01: 'You must provide an authentication type',
  A02: 'You must provide a First Name',
  A03: 'You must provide a Last Name',
  A04: 'You must provide an User Name',
  A05: 'Your password must have at least 6 digits',
  A06: 'Invalid Email or Password',
  A07: {
    debug: 'existing user',
    user: 'This email is already in use. Please choose another one'
  },
  A08: 'An User ID is required',
  A09: 'User not Found',
  A10:
    'Ops! It was not possible to create a new user. Please, try again later or contact the support',
  A11: 'Invalid Username',
  B01: 'No Provided Token',
  B02: 'Invalid Token',
  D01: {
    debug: 'Ops! We could not create your notes',
    user: 'Empty array of Notes'
  },
  D02: 'Ops! We could not retrieve your notes'
}

module.exports = errorsMap
