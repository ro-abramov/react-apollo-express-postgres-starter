const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const env = process.env.NODE_ENV || 'development';
const app = express();

// Logger
app.use(morgan('tiny'));

// Parse JSON Body
app.use(bodyParser.json());

if (env === 'production') {
  app.use(express.static(path.resolve(__dirname, '../../build')));
}

app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hello world',
    env: process.env.NODE_ENV
  });
});

app.listen(3100, () => {
  console.log('Express is listening on port http://localhost:3100');
});
