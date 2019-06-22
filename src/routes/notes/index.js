const express = require('express')
const Router = express.Router()
const jwt = require('jsonwebtoken')
const logger = require('../../utils/logger')

// Project's Config
const { errorsMap, USER_COOKIE_NAME } = require('../../config')

// Models
const Note = require('../../models/Note')

// MiddlewaresTokenExpiredError
const authorization = require('../../middlewares/authorization')

Router.get('/', async (req, res) => {
  try {
    // Access denied if an invalid cookie was passed
    const token = req.cookies[USER_COOKIE_NAME] || ''
    // Decoding JWT stored in the 'USER_COOKIE_NAME'
    const decodeToken = jwt.verify(token, process.env.USER_TOKEN_SECRET)
    const { id } = decodeToken

    if (!id) {
      // Logging
      logger.error(`user '${id}' not found on Database`)

      return res.send(400, errorsMap['D02'])
    }

    const allNotes = await Note.find({ user: id })
      .populate('related_notes', 'description')
      .select('description language related_notes')

    res.send(allNotes)
  } catch (err) {
    // Logging
    logger.error(err.message)

    return res.send(403, {
      name: 'InvalidToken',
      message: errorsMap['B02']
    })
  }
})

Router.post('/', authorization, async (req, res) => {
  const { description, language, body, user, related_notes } = req.body

  const newNote = await new Note({
    description,
    language,
    body,
    user,
    related_notes
  })

  const insertionResult = await newNote.save()

  res.send(insertionResult)
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
