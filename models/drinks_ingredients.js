'use strict';
module.exports = (sequelize, DataTypes) => {
  const drinks_ingredients = sequelize.define('drinks_ingredients', {
    drinkId: DataTypes.INTEGER,
    ingredientId: DataTypes.INTEGER,
    amount: DataTypes.STRING
  }, {});
  drinks_ingredients.associate = function(models) {
    // associations can be defined here
  };
  return drinks_ingredients;
};