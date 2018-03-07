const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const path = require('path');
const morgan = require('morgan');
const env = process.env.NODE_ENV || 'development';
const app = express();
const User = require('./models').User;
// WebSockets goes here
const { execute, subscribe } = require('graphql');
const { createServer } = require('http');
const { SubscriptionServer } = require('subscriptions-transport-ws');

const ws = createServer(app);

const { schema } = require('./schema');

// Logger
app.use(morgan('tiny'));

// Parse JSON Body
app.use(bodyParser.json());

if (env === 'production') {
  app.use(express.static(path.resolve(__dirname, '../../build')));
}

app.use('/api/graphql', graphqlExpress({ schema }));
app.use(
  '/api/graphiql',
  graphiqlExpress({ endpointURL: '/api/graphql', subscriptionsEndpoint: 'ws:localhost:3100/subscriptions' })
);

app.get('/api/hello', async (req, res) => {
  const user = await User.findOne({
    where: {
      firstname: 'John'
    }
  });
  res.json({
    message: 'Hello world',
    env: process.env.NODE_ENV,
    user
  });
});

ws.listen(3100, () => {
  console.log('Express is listening on port http://localhost:3100');
  new SubscriptionServer(
    {
      execute,
      subscribe,
      schema
    },
    {
      server: ws,
      path: '/subscriptions'
    }
  );
});
