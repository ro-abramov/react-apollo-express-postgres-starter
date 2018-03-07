const User = require('../../models').User;

const rootQueryResolvers = {
  user(rootObj, { firstname }) {
    return User.findOne({ where: { firstname } });
  },
  users() {
    return User.all();
  },
  async todos(rootObj, { userId }) {
    const user = await User.findById(userId);
    const todos = user.getTodos();
    return todos;
  }
};

module.exports = {
  rootQueryResolvers
};
