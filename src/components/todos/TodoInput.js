import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { addTodoQuery, userTodosQuery } from './queries';

class TodoInput extends Component {
  state = {
    value: ''
  };

  handleInputChange = e => {
    this.setState({ value: e.target.value });
  };

  addTodo = e => {
    const title = this.state.value;
    this.setState(pState => ({ value: '' }));

    this.props
      .mutate({
        variables: {
          user: this.props.user.id,
          title
        },
        optimisticResponse: {
          addTodo: {
            id: Math.round(Math.random() * -10000),
            title,
            completed: false,
            __typename: 'Todo'
          }
        },
        // As an example you may refetch preveios queries
        // Pros: it's up to Apollo how to validate it's own cache
        // Cons: Additional network request
        //
        // refetchQueries: [
        //   {
        //     query: userTodosQuery,
        //     variables: {
        //       userId: this.props.user.id
        //     }
        //   }
        // ]
        update: (store, { data: { addTodo } }) => {
          // Read data from the cache
          const data = store.readQuery({
            query: userTodosQuery,
            variables: { userId: this.props.user.id }
          });
          // Update todos
          data.todos.push(addTodo);
          // Write todos
          store.writeQuery({
            query: userTodosQuery,
            variables: {
              userId: this.props.user.id
            },
            data
          });
        }
      })
      .catch(r => {
        console.log(r.message);
        this.setState({ value: title });
      });
  };

  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.handleInputChange} />
        <button onClick={this.addTodo}>+</button>
      </div>
    );
  }
}

const enhancer = graphql(addTodoQuery);

export default enhancer(TodoInput);
