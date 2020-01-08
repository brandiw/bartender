'use strict'

module.exports = (sequelize, DataTypes) => {
  const drink = sequelize.define('drink', {
    name: DataTypes.STRING,
    directions: DataTypes.TEXT,
    description: DataTypes.TEXT,
    glass: {
      type: DataTypes.STRING,
      defaultValue: 'Martini'
    },
    rating: DataTypes.DECIMAL,
    alcohol: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    glassIcon: {
      type: DataTypes.STRING,
      defaultValue: 'https://res.cloudinary.com/briezh/image/upload/v1578518359/cocktail_glass_a9io9o.png'
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: 'https://res.cloudinary.com/briezh/image/upload/v1578518531/maitai_uwmmld.jpg'
    }
  }, {})

  drink.associate = function(models) {
    models.drink.hasMany(models.recipe)
  }

  return drink
}
