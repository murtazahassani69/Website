const express = require('express');
const path = require('path');
const usersRouter = require('./routes/users');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use('/users', usersRouter);


app.listen(8080); 

console.log("Server running at port 8080")

module.exports = app;