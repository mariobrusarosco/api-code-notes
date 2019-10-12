const Joi = require('@hapi/joi')

const mountValidation = function(validations) {
  const arrayOfArguments = Array.prototype.slice.call(arguments)

  const validationOptions = arrayOfArguments.reduce(
    (obj, argument) => ({
      ...obj,
      ...argument
    }),
    {}
  )

  return dataToValidate => {
    return Joi.validate(dataToValidate, validationOptions)
  }
}

const email = {
  email: Joi.string()
    .min(7)
    .max(255)
    .required()
    .email()
    .error(() => new Error('A08'))
}

const password = {
  password: Joi.string()
    .min(6)
    .max(1024)
    .required()
    .error(() => new Error('A07'))
}

const validateNewUser = req => {
  const validationOptions = Joi.object({
    authTypes: Joi.string()
      .required()
      .error(new Error('A01')),
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
    username: Joi.string()
      .max(255)
      .error(new Error('A11')),
    password: Joi.string()
      .min(6)
      .max(50)
      .required()
      .error(new Error('A07'))
    // repeat_password: Joi.ref('password'),
  })

  return validationOptions.validate(req)
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

const validateReturningUser = reqBody => {
  const validationOptions = {
    ...email,
    ...password
  }

  return Joi.validate(reqBody, validationOptions)
}

module.exports = {
  email,
  password,
  validateNewUser,
  // validateExistingUser
  mountValidation
}
