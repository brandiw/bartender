'use strict'

module.exports = (sequelize, DataTypes) => {
  const drink = sequelize.define('drink', {
    name: DataTypes.STRING,
    directions: DataTypes.TEXT,
    description: DataTypes.TEXT,
    glass: DataTypes.STRING,
    rating: DataTypes.DECIMAL,
    alcohol: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {})

  drink.associate = function(models) {
    // associations can be defined here
    models.drink.belongsToMany(models.ingredient, {
      through: models.drinks_ingredients
    })
  }

  return drink
}
