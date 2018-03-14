import React from 'react';
import { graphql } from 'react-apollo';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import TodoStatistic from './TodoStatistic';
import { Placeholder } from '../styled';
import { userTodosQuery, todosSubscription } from './queries';

class TodosContainer extends React.Component {
    componentDidMount() {
        this.props.subscribeToNewTodos();
    }

    render() {
        const { loading, error, todos } = this.props.data;

        if (loading) {
            return <Placeholder>loading ...</Placeholder>;
        }

        if (error) {
            return <Placeholder danger>error</Placeholder>;
        }

        return (
            <div>
                <TodoInput user={this.props.user} />
                <div>{todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}</div>
                <TodoStatistic user={this.props.user} />
            </div>
        );
    }
}

const enhancer = graphql(userTodosQuery, {
    options: props => ({
        variables: {
            userId: props.user.id
        }
    }),
    props: props => {
        return {
            ...props,
            subscribeToNewTodos: () => {
                return props.data.subscribeToMore({
                    document: todosSubscription,
                    variables: {
                        userId: props.ownProps.user.id
                    },
                    updateQuery: (prev, { subscriptionData }) => {
                        if (!subscriptionData.data) {
                            return prev;
                        }
                        const newTodo = subscriptionData.data.todosAdded;
                        const isAlreadyPresent = prev.todos.find(todo => todo.id === newTodo.id);
                        if (isAlreadyPresent) {
                            return prev;
                        }
                        return { ...prev, todos: [...prev.todos, newTodo] };
                    }
                });
            }
        };
    }
});

export default enhancer(TodosContainer);
