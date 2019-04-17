// Require needed modules
let express = require('express')

// Declare an express router
let router = express.Router()

// Reference the models
// let db = require('../models')

// GET /drinks
router.get('/', (req, res) => {
  res.render('drinks/index')
})

// POST /drinks
router.post('/', (req, res) => {
  res.send(req.body)
})

// GET /drinks/new
router.get('/new', (req, res) => {
  res.render('drinks/new')
})

// GET /drinks/:id
router.get('/:id', (req, res) => {
  res.render('drinks/show')
})

// Export the routes from this file
module.exports = router
