const express = require('express')
const Router = express.Router()
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const jwt = require('jsonwebtoken')
const { fileLogger } = require('../../utils/logger')

// Project's Config
const { errorsMap, USER_COOKIE_NAME } = require('../../config')

// Models
const Note = require('../../models/Note')
const Topic = require('../../models/Topic')

// MiddlewaresTokenExpiredError
const authorization = require('../../middlewares/authorization')

Router.get('/', async (req, res) => {
  try {
    //Access denied if an invalid cookie was passed
    // const token = req.cookies[USER_COOKIE_NAME] || ''
    // Decoding JWT stored in the 'USER_COOKIE_NAME'
    // const decodeToken = jwt.verify(token, process.env.USER_TOKEN_SECRET)
    // const { id } = decodeToken

    // if (!id) {
    //   // Logging
    //   fileLogger.error(`user '${id}' not found on Database`)

    //   return res.send(400, errorsMap['D02'])
    // }

    const user = ObjectId(req.body.user)

    const allNotes = await Note.find({ user })
      .populate('topic', 'label -_id')
      .select('user description content topic related_notes')

    res.status(200).send(allNotes)
  } catch (err) {
    // Logging
    fileLogger.error(err.message)

    return res.send(403, {
      name: 'InvalidToken',
      message: errorsMap['B02']
    })
  }
})

Router.post('/', async (req, res) => {
  const notesToInsert = req.body

  if (!notesToInsert) {
    res.status(400).send(errorsMap['D01'].client)

    fileLogger.error(errorsMap['D01'].debug)
  }

  let successInsertions = []
  let failedInsertions = []

  notesToInsert.forEach(async note => {
    // TODO VALIDATE NOTE SCHEMA
    const newNote = await new Note({ ...note })
    console.log({ newNote })
    const insertionResult = await newNote.save()
    successInsertions.push(insertionResult)
  })

  res.send(successInsertions)
})

Router.put('/', async (req, res) => {
  const { id, updates } = req.body

  const note = await Note.update(
    { _id: id },
    {
      $set: {
        description: 'Altered',
        language: updates.language
      }
    },
    { new: true }
  )

  res.send(note)
})

module.exports = Router
