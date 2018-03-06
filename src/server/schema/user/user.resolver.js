const User = require('../../models').User;
const todo = require('../../models').todo;

const userResolver = {
  async todos(u) {
    const user = await User.findById(u.id);
    const todos = await user.getTodos();
    return todos;
  }
};

module.exports = {
  userResolver
};
