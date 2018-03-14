import React from 'react';
import { graphql } from 'react-apollo';
import { userTodosQuery } from './queries';

const TodoStatistic = ({ data: { todos } }) => {
    if (!todos) {
        return null;
    }

    const completedTodos = todos.filter(t => t.completed).length;
    const incompletedTodos = todos.length - completedTodos;
    return (
        <div>
            You have {completedTodos} completed and {incompletedTodos} incompleted todos
        </div>
    );
};

const enhancer = graphql(userTodosQuery, {
    options: props => ({
        variables: {
            userId: props.user.id
        }
    })
});

export default enhancer(TodoStatistic);
