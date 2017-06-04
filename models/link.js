'use strict';
module.exports = function(sequelize, DataTypes) {
  var Link = sequelize.define('Link', {
    slug: DataTypes.STRING,
    url: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Link.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            name: "UserId",
            allowNull: true
          }
        });
      }
    }
  });
  return Link;
};
