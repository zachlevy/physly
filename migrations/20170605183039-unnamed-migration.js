'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Links',
      'favicon',
      {
        type: Sequelize.STRING,
        allowNull: true
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Links', 'favicon')
  }
};
