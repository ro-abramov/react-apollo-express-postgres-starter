const { rootQueryResolvers } = require('./schema/root-query/rootQuery.resolvers');
const { rootMutationResolvers } = require('./schema/root-mutation/root-mutaion.resolver');
const { userResolver } = require('./schema/user/user.resolver');

module.exports = {
  RootQuery: rootQueryResolvers,
  RootMutation: rootMutationResolvers,
  User: userResolver
};
