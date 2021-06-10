let enviroment = process.env.NODE_ENV || 'development';
let config = require('../knexfile')[enviroment];
module.exports = require('knex')(config);
