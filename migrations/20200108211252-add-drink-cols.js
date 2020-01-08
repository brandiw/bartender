'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('drinks', 'glassIcon', Sequelize.STRING)
    .then(() => {
      return queryInterface.addColumn('drinks', 'image', Sequelize.STRING)
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('drinks', 'glassIcon')
    .then(() => {
      return queryInterface.removeColumn('drinks', 'image')
    })
  }
};
