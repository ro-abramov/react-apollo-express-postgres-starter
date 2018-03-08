'use strict';
module.exports = (sequelize, DataTypes) => {
  var todo = sequelize.define(
    'todo',
    {
      title: DataTypes.STRING,
      completed: DataTypes.BOOLEAN
    },
    {}
  );
  todo.associate = function(models) {
    todo.belongsTo(models.User);
  };
  return todo;
};
