require('dotenv').config();

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: './DB/migrations',
    },
    seeds: {
      directory: './DB/seeds/dev',
    },
  production: {
      client: 'mysql',
      connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
      },
      migrations: {
        directory: './DB/migrations',
      },
      seeds: {
        directory: './DB/seeds/dev',
      },
    },
      useNullAsDefault: true,
  },
};
