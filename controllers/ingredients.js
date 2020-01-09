// Declare an express router
let router = require('express').Router()

// Reference the models
let db = require('../models')

// GET /ingredients
router.get('/', (req, res) => {
  res.send('hello')
})

// Export the routes from this file
module.exports = router
