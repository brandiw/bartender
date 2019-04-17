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
    // associations can be defined here
  }

  return drinks_ingredients
}
