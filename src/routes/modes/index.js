const path = require('path')
const express = require('express')
const Router = express.Router()

// App's Config
// const { } = require('../../config')

// Middlewares
const authorization = require('../../middlewares/authorization')

Router.get('/:mode', authorization, async (req, res) => {
  const { mode } = req.params

  // TODO Refactor this long path with something like rootApp lib
  res.sendFile(
    path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      'static',
      'code-mirror',
      'mode',
      mode,
      `${mode}.js`
    )
  )
})

module.exports = Router
