
require('dotenv').config();
const mysql = require('mysql');


const pool = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  multipleStatements: true,
});

pool.connect(err=> {
  let msg = !err ? 'connected successfully' : "connection error";
  console.log(`mysql: ${msg}`);
})

module.exports = pool;
