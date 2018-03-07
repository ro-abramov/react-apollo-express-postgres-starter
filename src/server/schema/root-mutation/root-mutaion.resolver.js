const { User, todo } = require('../../models');
const { pubsub } = require('../subscriptions/subscription.resolver');

const delay = ms =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

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
      const todosAdded = await todo.create({
        title,
        userId,
        completed: false
      });
      pubsub.publish('todosAdded', { todosAdded, userId });
      return todosAdded;
    } catch (e) {
      return e;
    }
  },
  async toggleTodo(rootObj, { todoId }) {
    try {
      await delay(1200);
      const t = await todo.findById(todoId);
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
