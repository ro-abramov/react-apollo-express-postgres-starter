'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('todos', [
            {
                title: 'Todo 1',
                completed: false,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1
            },
            {
                title: 'Todo 2',
                completed: false,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1
            },
            {
                title: 'Todo 2',
                completed: true,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1
            },
            {
                title: 'Todo 4',
                completed: true,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1
            },
            {
                title: 'Todo 5',
                completed: false,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1
            },
            {
                title: 'Todo 6',
                completed: true,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        queryInterface.bulkDelete('todos', [{}]);
    }
};
