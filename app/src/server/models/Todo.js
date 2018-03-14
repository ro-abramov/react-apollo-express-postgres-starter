'use strict';
module.exports = (sequelize, DataTypes) => {
    var Todo = sequelize.define(
        'todo',
        {
            title: DataTypes.STRING,
            completed: DataTypes.BOOLEAN
        },
        {}
    );
    Todo.associate = function(models) {
        Todo.belongsTo(models.User);
    };
    return Todo;
};
