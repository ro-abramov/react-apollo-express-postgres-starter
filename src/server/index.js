const { connect } = require('./db');
require('dotenv').config();

const dbConfig = {
  port: process.env.DB_PORT || 5432,
  db: process.env.DB_DATABASE || 'postgres',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres'
};

connect(dbConfig)
  .then(() => {
    require('./app.js');
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
