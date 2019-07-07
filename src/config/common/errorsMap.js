// Errors started with A: related about User Verification
// Errors started with B: related about Authorization, tokens and cookies
const errorsMap = {
  A01: 'You must provide an authentication type',
  A02: 'You must provide a First Name',
  A03: 'You must provide a Last Name',
  A04: 'You must provide an User Name',
  A05: 'Your password must have at least 6 digits',
  A06: 'Invalid Email or Password',
  A07: 'This email is already in use. Please choose another one',
  A08: 'An User ID is required',
  A09: 'User not Found',
  A10: '',
  B01: 'No Provided Token',
  B02: 'Invalid Token',
  D01: 'This email is already registered. Please try a diferent one',
  D02: 'Ops! We could not retrieve your notes'
}

module.exports = errorsMap
