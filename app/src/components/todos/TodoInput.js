import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { addTodoQuery, userTodosQuery } from './queries';
import { Input, Button } from 'antd';

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
                // Note that there is a bug in apollo v2.x
                // It's better not to use OptimisticResponse with Subscriptions
                //
                // optimisticResponse: {
                //   addTodo: {
                //     id: Math.round(Math.random() * -10000),
                //     title,
                //     completed: false,
                //     __typename: 'Todo'
                //   }
                // },
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
                update: (store, x) => {
                    const { data: { addTodo } } = x;
                    // Read data from the cache
                    const data = store.readQuery({
                        query: userTodosQuery,
                        variables: { userId: this.props.user.id }
                    });
                    // Update todo
                    const isAlreadyPresent = data.todos.find(
                        todo => todo.id === addTodo.id
                    );
                    if (!isAlreadyPresent) {
                        data.todos.push(addTodo);
                    }
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
                <Input
                    value={this.state.value}
                    onChange={this.handleInputChange}
                    style={{ width: '500px' }}
                />
                <Button type="primary" onClick={this.addTodo}>
                    Add Todo
                </Button>
            </div>
        );
    }
}

const enhancer = graphql(addTodoQuery);

export default enhancer(TodoInput);
