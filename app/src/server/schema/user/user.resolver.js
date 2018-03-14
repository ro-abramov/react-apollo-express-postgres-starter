const { User, Todo } = require('../../models');

const userResolver = {
    async todos(u) {
        const user = await User.findById(u.id, { include: [Todo] });
        return user.todos;
    }
};

module.exports = {
    userResolver
};
