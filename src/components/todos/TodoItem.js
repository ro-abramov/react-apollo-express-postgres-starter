import React from 'react';
import { graphql } from 'react-apollo';
import { toggleTodo } from './queries';

const TodoItem = ({ todo, mutate }) => {
  const handleClick = e => {
    mutate({
      variables: {
        todoId: todo.id
      },
      optimisticResponse: {
        toggleTodo: {
          ...todo,
          completed: !todo.completed,
          __typename: 'Todo'
        }
      }
    });
  };
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.completed} onChange={handleClick} />
        <span className={todo.completed ? 'TodoCompletedLabel' : 'TodoIncompletedLabel'}>{todo.title}</span>
        {todo.id < 0 && <div>Adding .... </div>}
      </label>
    </div>
  );
};

const enhancer = graphql(toggleTodo);

export default enhancer(TodoItem);
