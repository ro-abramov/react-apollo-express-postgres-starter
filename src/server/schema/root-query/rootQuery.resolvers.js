const User = require('../../models').User;

const rootQueryResolvers = {
  user(rootObj, { firstname }) {
    return User.findOne({ where: { firstname } });
  },
  users() {
    return User.all();
  }
};

module.exports = {
  rootQueryResolvers
};
