// Declare an express router
let router = require('express').Router()

// Reference the models
let db = require('../models')

// GET /drinks
router.get('/', (req, res) => {
  db.drink.findAll()
  .then(drinks => {
    res.render('drinks/index', { drinks })
  })
  .catch(err => {
    console.log(err)
    res.render('404')
  })
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
  db.drink.findOne({
    where: { id: req.params.id },
    include: [{
      model: db.recipe,
      include: [db.ingredient]
    }]
  })
  .then(drink => {
    res.render('drinks/show', { drink })
  })
  .catch(err => {
    console.log(err)
    res.render('404')
  })
})

// GET /drinks/:id/recipes/new
router.get('/:id/recipes/new', (req, res) => {
  db.drink.findByPk(req.params.id)
  .then(drink => {
    db.ingredient.findAll()
    .then(ingredients => {
      res.render('recipes/new', {
        drink,
        ingredients
      })
    })
    .catch(err => {
      console.log(err)
      res.render('404')
    })
  })
  .catch(err => {
    console.log(err)
    res.render('404')
  })
})

// POST /drinks/:id/recipes
router.post('/:id/recipes', (req, res) => {
  console.log(req.body)
  db.recipe.bulkCreate(req.body.results)
  .then(() => {
    res.send({ message: 'ok' })
  })
  .catch(err => {
    res.status(503).send({ message: 'ok' })
  })
})

// Export the routes from this file
module.exports = router
