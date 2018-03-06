require('dotenv').config();

const dbConfig = {
  port: process.env.DB_PORT || 5432,
  db: process.env.DB_DATABASE || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres'
};

const env = process.env.NODE_ENV || 'development';

const config = {
  [env]: {
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.db,
    host: dbConfig.host,
    dialect: 'postgres'
  }
};

module.exports = config;
