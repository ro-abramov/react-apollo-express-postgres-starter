const { PubSub, withFilter } = require('graphql-subscriptions');

const pubsub = new PubSub();

const SubscriptionResolver = {
  todosAdded: {
    subscribe: withFilter(
      () => pubsub.asyncIterator('todosAdded'),
      (payload, variables) => {
        return payload.userId === variables.userId;
      }
    )
  }
};

module.exports = {
  pubsub,
  SubscriptionResolver
};
