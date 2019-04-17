'use strict'

module.exports = (sequelize, DataTypes) => {
  const ingredient = sequelize.define('ingredient', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    type: DataTypes.STRING
  }, {})

  ingredient.associate = function(models) {
    // associations can be defined here
    models.ingredient.belongsToMany(models.drink, {
      through: models.drinks_ingredients
    })
  }

  return ingredient
}
