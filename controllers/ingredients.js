// Declare an express router
let router = require('express').Router()

// Reference the models
let db = require('../models')

// GET /ingredients
router.get('/', (req, res) => {
  db.ingredient.findAll({
    include: [{
      model: db.recipe,
      include: [db.drink]
    }]
  })
  .then(ingredients => {
    res.render('ingredients/index', { ingredients })
  })
  .catch(err => {
    console.log(err)
    res.render('404')
  })
})

router.post('/', (req, res) => {
  db.ingredient.create(req.body)
  .then(() => {
    res.redirect('/ingredients')
  })
  .catch(err => {
    console.log(err)
    res.render('404')
  })
})

router.get('/new', (req, res) => {
  res.render('ingredients/new')
})

// Export the routes from this file
module.exports = router
