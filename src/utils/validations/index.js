const Joi = require('joi')

const email = {
  email: Joi.string()
    .min(7)
    .max(255)
    .required()
    .email()
}

const password = {
  password: Joi.string()
    .min(6)
    .max(1024)
    .required()
}

const validateNewUser = req => {
  const validationOptions = {
    firstname: Joi.string()
      .min(2)
      .max(25)
      .required()
      .error(new Error('A02')),
    lastname: Joi.string()
      .min(2)
      .max(50)
      .required()
      .error(new Error('A03')),
    email: Joi.string()
      .min(7)
      .max(255)
      .required()
      .email()
      .error(new Error('A08')),
    password: Joi.string()
      .min(6)
      .max(50)
      .required()
      .error(new Error('A07')),
    authTypes: Joi.array()
      .required()
      .error(new Error('A01'))
  }

  return Joi.validate(req, validationOptions)
}

const validateExistingUser = data => {
  const validationOptions = {
    id: Joi.string()
      .required()
      .error(new Error('A08'))
    // firstname: Joi.string()
    //   .min(2)
    //   .max(25)
    //   .required()
    //   .error(new Error('A02')),
    // lastname: Joi.string()
    //   .min(2)
    //   .max(50)
    //   .required()
    //   .error(new Error('A03')),
    // email: Joi.string()
    //   .min(7)
    //   .max(255)
    //   .required()
    //   .email()
    //   .error(new Error('A08')),
    // password: Joi.string()
    //   .min(6)
    //   .max(50)
    //   .required()
    //   .error(new Error('A07')),
    // authTypes: Joi.array()
    //   .required()
    //   .error(new Error('A01'))
  }

  return Joi.validate(data, validationOptions)
}

module.exports = {
  email,
  password,
  validateNewUser,
  validateExistingUser
}
