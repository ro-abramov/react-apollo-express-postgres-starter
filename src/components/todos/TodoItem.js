import React from 'react';
import { graphql } from 'react-apollo';
import { toggleTodo } from './queries';

const TodoItem = ({ todo, mutate }) => {
  const handleClick = e => {
    mutate({
      variables: {
        todoId: todo.id
      }
    });
  };
  return (
    <div onClick={handleClick}>
      <h5>
        {todo.title}
        <small> {todo.completed ? 'completed' : 'to do'}</small>
      </h5>
    </div>
  );
};

const enhancer = graphql(toggleTodo);

export default enhancer(TodoItem);
