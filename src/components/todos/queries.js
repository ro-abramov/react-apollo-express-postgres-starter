import gql from 'graphql-tag';

export const userTodosQuery = gql`
  query getQueryForUser($userId: Int!) {
    todos(userId: $userId) {
      id
      title
      completed
    }
  }
`;
export const toggleTodo = gql`
  mutation toggleTodo($todoId: Int!) {
    toggleTodo(todoId: $todoId) {
      id
      title
      completed
    }
  }
`;

export const addTodoQuery = gql`
  mutation addTodo($user: Int!, $title: String!) {
    addTodo(userId: $user, title: $title) {
      id
      title
      completed
    }
  }
`;

export const todosSubscription = gql`
  subscription todosAdded($userId: Int!) {
    todosAdded(userId: $userId) {
      id
      title
      completed
    }
  }
`;
