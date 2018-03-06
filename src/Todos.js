import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const TodoItem = ({ todo }) => (
  <div>
    <h5>
      {todo.title}
      <small> {todo.completed ? 'completed' : 'to do'}</small>
    </h5>
  </div>
);

const TodosContainer = props => {
  const { loading, error, user } = props.data;
  if (loading) return 'loading ...';
  if (error) return 'error';
  return <div>{user.todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}</div>;
};

const query = gql`
  query getQueryForUser($userFirstName: String!) {
    user(firstname: $userFirstName) {
      todos {
        id
        title
        completed
      }
    }
  }
`;

const enhancer = graphql(query, {
  options: props => ({
    variables: {
      userFirstName: props.user.firstname
    }
  })
});

export default enhancer(TodosContainer);
