'use strict';
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define(
        'user',
        {
            firstname: DataTypes.STRING,
            lastname: DataTypes.STRING
        },
        {
            freezeTableNames: true
        }
    );
    User.associate = function(models) {
        User.hasMany(models.todo);
    };
    return User;
};
