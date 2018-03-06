import React from 'react';
import { graphql } from 'react-apollo';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import { userTodosQuery } from './queries';

const TodosContainer = props => {
  const { loading, error, user } = props.data;
  if (loading) return 'loading ...';
  if (error) return 'error';
  return (
    <div>
      <TodoInput user={user} />
      <div>{user.todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}</div>
    </div>
  );
};

const enhancer = graphql(userTodosQuery, {
  options: props => ({
    variables: {
      userFirstName: props.user.firstname
    }
  })
});

export default enhancer(TodosContainer);
