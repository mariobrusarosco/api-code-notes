const express = require('express')
const Router = express.Router()
const Joi = require('@hapi/joi')

// Utils
const PromiseTryCatch = require('../../utils/PromiseTryCatch')
// Common Functions
// const validateNewUser = req => {
//   const validationOptions = {
//     firstname: Joi.string().min(2).max(25).required(),
//     lastname: Joi.string().min(2).max(50).required(),
//     email: Joi.string().min(7).max(255).required().email(),
//     password: Joi.string().min(6).max(1024).required(),
//     authTypes: Joi.array().required().error(new Error(40))
//   }

//   return Joi.validate(req, validationOptions)
// }

// Model
const User = require('../../models/User')

// Comparison Query
// eq (equal)
// ne (not equal)
// gt (greater than)
// gte (greater or equal than)
// lt (less than)
// lte (less or equal than)
// in (is a value of an array)
// nin (not in)

// Logical Operators
// .find()
// .or([{ name: 'Walter White'}, { email: 'ww@gmail.com'} ])
// .and([{ name: 'Walter White'}, { email: 'ww@gmail.com'} ])

// Regex
// .find({ name: /^W/})

// Count the query results
// .count()

Router.get('/', async (req, res) => {
  const allUsers = await User.find({
    isPublished: true,
    name: { $in: ['Walter White', 'Heisenberg'] },
    email: { $eq: 'ww@gmail.com' }
  })
    .limit(10)
    .sort({ name: 1 }) // 1 means 'ASC' and -1 means -1
    //.sort('name')
    .select({ name: 1, email: -1 })
  // simple select version
  //.select('name -email')

  res.send(allUsers)
})

Router.post('/', async (req, res) => {
  const { name, email, isPublished, numberOfPurchases, authTypes } = req.body

  const newUser = new User({
    name,
    email,
    isPublished,
    numberOfPurchases,
    authTypes
  })

  // Using .validate() from mongoose
  // newUser.validate()
  // 	.then(data => {
  // 		console.log('data', data)
  // 	})
  // 	.catch(e => console.error(e.message))
  // const validation = await newUser.validate()

  try {
    const result = await newUser.save()

    res.send(result)
  } catch (e) {
    const errors = Object.keys(e.errors).map(error => e.errors[error]['message'])

    res.status(400).send(errors)
  }
})

Router.put('/', async (req, res) => {
  const mockedId = '5c69a02b06f59901c9338970'

  const user = await User.findById(mockedId)

  if (!user) {
    return res.send('user not found')
  }

  // Query and then update approach

  // Assigning new properties
  user.isPublished = false
  user.name = "Walter 'Heisenberg' White"

  // Using ge .set() method
  user.set({
    isPublished: false,
    name: "Walter 'Heisenberg' White"
  })

  // Update First approach
  const updatedUser = await User.findOneAndUpdate(
    { _id: mockedId },
    {
      $set: {
        name: 'bbbbb',
        isPublished: false
      }
    },
    { new: true }
  ).select('name')

  // const updatedUser = await user.save()

  res.send(updatedUser)
})

Router.delete('/', async (req, res) => {
  const mockedId = '5c68273df7f5d0328bd50303'

  const deletedUser = await User.findOneAndRemove({
    _id: mockedId
  })

  res.send(deletedUser)
})

// Common Functions
// const validateUser = req => {
//   const validationOptions = {
//     name: Joi.string()
//       .min(3)
//       .required()
//   }

//   return Joi.validate(req.body, validationOptions)
// }

// const getUser = req => {
//   return mock.users.find(user => {
//     return user.id === parseInt(req.params.id)
//   })
// }

// Router.get('/:id', (req, res) => {
//   const user = getUser(req)

//   if (!user) {
//     return res.status(404).send('Invalid User Id')
//   }

//   return res.send(user)
// })

// Router.get('/', (req, res) => {
//   res.send(mock.users)
// })

// Router.post('/', (req, res) => {
//   // TODO:Two options of validation:
//   // -> 'joi' library
//   // ->  'Own validators'
//   validateUser(req)
//     .then(({ name }) => {
//       const user = {
//         id: mock.users.length + 1,
//         name
//       }

//       mock.users.push(user)
//       return res.send(mock.users)
//     })
//     .catch(({ details }) => res.status(404).send(details.map(error => error.message)))
// })

// Router.put('/:id', (req, res) => {
//   const user = getUser(req)

//   if (!user) {
//     return res.status(404).send('Invalid User Id')
//   }

//   validateUser(req)
//     .then(({ name }) => {
//       user.name = name
//       return res.send(user)
//     })
//     .catch(({ details }) => res.status(404).send(details.map(error => error.message)))
// })

// Router.delete('/:id', (req, res) => {
//   const user = getUser(req)

//   if (!user) {
//     return res.status(404).send('Invalid User Id')
//   }

//   console.log('deleting user')
//   return res.send(user)
// })

module.exports = Router
