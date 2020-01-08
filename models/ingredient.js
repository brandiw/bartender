'use strict'

module.exports = (sequelize, DataTypes) => {
  const ingredient = sequelize.define('ingredient', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    type: DataTypes.STRING
  }, {})

  ingredient.associate = function(models) {
    // associations can be defined here
    // models.ingredient.belongsToMany(models.drink, {
    //   as: 'Choices',
    //   through: 'drinks_ingredients',
    //   onDelete: 'CASCADE'
    // })
    models.ingredient.hasMany(models.recipe)
  }

  return ingredient
}
