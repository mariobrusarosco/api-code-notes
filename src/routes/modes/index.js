const path = require('path')
const express = require('express')
const Router = express.Router()
const fs = require('fs')

// App's Config
// const { } = require('../../config')

// Middlewares
const authorization = require('../../middlewares/authorization')

Router.get('/:mode', authorization, async (req, res) => {
  const { mode } = req.params

  // TODO Refactor this long path with something like rootApp lib
  const modePath = path.resolve(
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

  res.sendFile(modePath)

  // const modeExists = await fs.exists(modePath, err => {
  //   if (err) {
  //     console.log(err)
  //     res.status(400).send('Invalid Mode')
  //   }
  //   return true
  // })

  // console.log('---', modeExists)
})

module.exports = Router
