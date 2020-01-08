'use strict'

module.exports = (sequelize, DataTypes) => {
  const drinks_ingredients = sequelize.define('drinks_ingredients', {
    drinkId: DataTypes.INTEGER,
    ingredientId: DataTypes.INTEGER,
    amount: {
      type: DataTypes.STRING,
      defaultValue: '1 part'
    }
  }, {})

  drinks_ingredients.associate = function(models) {
    models.drinks_ingredients.belongsTo(models.drink)
    models.drinks_ingredients.belongsTo(models.ingredient)
  }

  return drinks_ingredients
}
