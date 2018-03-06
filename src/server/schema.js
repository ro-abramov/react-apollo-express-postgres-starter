const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');
const fs = require('fs');
const path = require('path');

function requireText(p) {
  return fs.readFileSync(path.resolve(__dirname, p), 'utf-8');
}

const rootQuery = requireText('./schema/root-query/rootQuery.graphql');
const rootMutation = requireText('./schema/root-mutation/root-mutation.graphql');
const user = requireText('./schema/user/user.graphql');
const todo = requireText('./schema/todo/todo.graphql');

const SchemaDefinitions = `
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;

const typeDefs = [SchemaDefinitions, rootQuery, rootMutation, user, todo];

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = {
  schema
};
