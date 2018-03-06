const { User, todo } = require('../../models');

const rootMutationResolvers = {
  async addUser(rootObj, { firstname, lastname }) {
    try {
      const user = await User.create({ firstname, lastname });
      return user;
    } catch (e) {
      return new Error("User can't be created");
    }
  },

  async addTodo(rootObj, { userId, title }) {
    try {
      const t = await todo.create({
        title,
        userId,
        completed: false
      });
      return t;
    } catch (e) {
      return e;
    }
  },
  async toggleTodo(rootObj, { todoId }) {
    try {
      const t = await todo.update(todoId);
      await t.update({ completed: !t.completed });
      return t;
    } catch (error) {
      return error;
    }
  }
};

module.exports = {
  rootMutationResolvers
};
