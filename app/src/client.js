import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';

const SOCKET_PORT = process.env.NODE_ENV === 'production' ? '3100' : '3000';

const httpLink = new HttpLink({
    uri: '/api/graphql'
});

const wsLink = new WebSocketLink({
    uri: `ws://localhost:${SOCKET_PORT}/subscriptions`
});

const link = split(
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    httpLink
);

export const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
});
