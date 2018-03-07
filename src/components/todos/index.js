import React from 'react';
import { graphql } from 'react-apollo';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import { userTodosQuery } from './queries';

const TodosContainer = props => {
  const { loading, error, todos } = props.data;
  if (loading) return 'loading ...';
  if (error) return 'error';
  return (
    <div>
      <TodoInput user={props.user} />
      <div>{todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}</div>
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

export default enhancer(TodosContainer);
