import React from 'react';
import styled from 'react-emotion';
import { graphql } from 'react-apollo';
import { toggleTodo } from './queries';

const StyledLabel = styled.span`
  color: ${props => (props.crossOut ? '#999' : props.theme.textColor)};
  text-decoration: ${props => (props.crossOut ? 'line-through' : 'none')};
`;

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
        <StyledLabel crossOut={todo.completed}>{todo.title}</StyledLabel>
        {todo.id < 0 && <div>Adding .... </div>}
      </label>
    </div>
  );
};

const enhancer = graphql(toggleTodo);

export default enhancer(TodoItem);
