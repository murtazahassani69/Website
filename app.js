const createError = require('http-errors');
const express = require('express');
const path = require('path');

const citiesRouter = require('./routes/cities');
const countriesRouter = require('./routes/countries');
const cvTemplatesRouter = require('./routes/cvTemplates');
const gendersRouter = require('./routes/genders');
const languagesRouter = require('./routes/languages');
const professionsRouter = require('./routes/professions');
const purchasesRouter = require('./routes/purchases');
const statesRouter = require('./routes/states');
const subscriptionsRouter = require('./routes/subscriptions');
const usersRouter = require('./routes/users');
const userTypesRouter = require('./routes/userTypes');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// ENABLE CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/cities', citiesRouter);
app.use('/countries', countriesRouter);
app.use('/cvTemplates', cvTemplatesRouter);
app.use('/genders', gendersRouter);
app.use('/languages', languagesRouter);
app.use('/professions', professionsRouter);
app.use('/purchases', purchasesRouter);
app.use('/states', statesRouter);
app.use('/subscriptions', subscriptionsRouter);
app.use('/users', usersRouter);
app.use('/userTypes', userTypesRouter);

app.listen(8080); 

console.log("Server running at port 8080");

module.exports = app;