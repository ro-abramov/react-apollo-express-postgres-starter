module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [
            {
                firstname: 'John',
                lastname: 'Snow',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        queryInterface.bulkDelete('users', [{ firstname: 'John' }]);
    }
};
