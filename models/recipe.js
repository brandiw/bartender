'use strict';
module.exports = (sequelize, DataTypes) => {
  const recipe = sequelize.define('recipe', {
    ingredientId: DataTypes.INTEGER,
    drinkId: DataTypes.INTEGER,
    amount: {
      type: DataTypes.STRING,
      defaultValue: '1 part'
    }
  }, {});
  recipe.associate = function(models) {
    // associations can be defined here
    models.recipe.belongsTo(models.drink)
    models.recipe.belongsTo(models.ingredient)
  };
  return recipe;
};
