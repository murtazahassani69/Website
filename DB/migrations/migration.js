require('dotenv').config();

exports.up = function(knex, Promise){
  return knex.schema
  .createTable('users', table =>{
    table.increments('id');
    table.date('creationDate', 100).notNullable();
    table.varchar('firstName', 100).notNullable();
    table.varchar('lastName', 100).notNullable();
    table.varchar('email', 100).notNullable();
    table.varchar('password', 100).notNullable();
    table.date('dateOfBirth', 100).notNullable();
    table.varchar('lookingJobAt', 100).notNullable();
    table.integer('userTypeId').references('id').inTable('userTypes'); // Foreign Key example
    table.integer('countryId').references('id').inTable('countries'); 
    table.integer('languageId').references('id').inTable('languages'); 
    table.integer('professionId').references('id').inTable('professions'); 
    table.integer('cityId').references('id').inTable('cities'); 
    table.integer('stateId').references('id').inTable('states'); 
    table.integer('subscriptionId').references('id').inTable('subscriptions'); 
    table.integer('genderId').references('id').inTable('genders'); 
  })
  .createTable('userTypes', table =>{
    table.increments('id');
    table.date('creationDate', 100).notNullable();
    table.varchar('fullName', 100).notNullable();
    table.varchar('useType', 100).notNullable();
    table.varchar('description', 100).notNullable();
  })
  .createTable('purchases', table =>{
    table.increments('id');
    table.date('creationDate').notNullable();
    table.varchar('fullName').notNullable();
    table.varchar('cvType').notNullable();
    table.float('amount').notNullable(); 
    table.integer('userId').references('id').inTable('users'); 
    table.integer('cvTemplateId').references('id').inTable('cvTemplates'); 
    table.integer('countryId').references('id').inTable('countries'); 
    table.integer('cityId').references('id').inTable('cities'); 
    table.integer('stateId').references('id').inTable('states');
    // table.integer('languageId').references('id').inTable('languages'); 
    // table.integer('professionId').references('id').inTable('professions'); 
    table.integer('intNumber').notNullable(); // 52, 12, 65
    table.float('floatNumber').notNullable(); // 12.56 , 8.90
  })
  .createTable('cvTemplates', table => {
    table.increments('id');
    table.date('creationDate').notNullable();
    table.varchar('cvType').notNullable();
  })
  .createTable('countries', table => {
    table.increments('id');
    table.date('creationDate').notNullable();
    table.varchar('countryName').notNullable();
    table.varchar('continent').notNullable();
    table.integer('cityId').references('id').inTable('cities');
    table.integer('stateId').references('id').inTable('states');
  })
  .createTable('languages', table => {
    table.increments('id');
    table.date('creationDate').notNullable();
    table.varchar('langauge').notNullable();
  })
  .createTable('professions', table => {
    table.increments('id');
    table.date('creationDate').notNullable();
    table.varchar('profession').notNullable();
  })
  .createTable('cities', table => {
    table.increments('id');
    table.date('creationDate').notNullable();
    table.varchar('countryName').notNullable();
    table.varchar('continent').notNullable();
    table.integer('stateId').references('id').inTable('states');
    table.integer('countryId').references('id').inTable('countries');
  })
  .createTable('states', table => {
    table.increments('id');
    table.date('creationDate').notNullable();
    table.varchar('state').notNullable();
    table.integer('cityId').references('id').inTable('cities');
    table.integer('countryId').references('id').inTable('countries');
  })
  .createTable('subscriptions', table => {
    table.increments('id');
    table.date('subscriptionDate').notNullable();
    table.varchar('fullName').notNullable();
    table.varchar('subscribe').notNullable();
    table.integer('cvTemplateId').references('id').inTable('cvTemplates'); 
  })
  .createTable('genders', table => {
    table.increments('id');
    table.date('creationDate').notNullable();
    table.varchar('fullName').notNullable();
    table.varchar('gender').notNullable();
  })
};

exports.down = function(knex, Promise){
  return knex.schema
  .dropTable('users')
  .dropTable('userTypes')
  .dropTable('purchases')
  .dropTable('cvTemplates')
  .dropTable('countries')
  .dropTable('languages')
  .dropTable('professions')
  .dropTable('cities')
  .dropTable('states')
  .dropTable('subscriptions')
  .dropTable('genders')
};
