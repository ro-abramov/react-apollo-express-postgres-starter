const Sequelize = require('sequelize');
const connect = async ({ port, db, username, password }) => {
  const sequelize = new Sequelize(db, username, password, {
    host: 'localhost',
    dialect: 'postgres',
    port,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },

    operatorsAliases: false
  });

  const User = sequelize.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
  });

  await sequelize.sync({ force: true });
  const user = await User.create({
    username: 'JohnDoe',
    birthday: new Date(1980, 6, 20)
  });
  console.log(user.toJSON());
};

module.exports = {
  connect
};
