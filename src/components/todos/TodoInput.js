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
    this.props
      .mutate({
        variables: {
          user: this.props.user.id,
          title: this.state.value
        },
        refetchQueries: [
          {
            query: userTodosQuery,
            variables: {
              userFirstName: this.props.user.firstname
            }
          }
        ]
      })
      .then(r => {
        this.setState({ value: '' });
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
