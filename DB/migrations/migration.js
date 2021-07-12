require('dotenv').config();

exports.up = function(knex, Promise){
  return knex.schema
  .createTable('userTypes', table =>{
    table.increments('id');
    table.date('creationDate', 45).notNullable();
    table.varchar('userType', 100).notNullable();
    table.varchar('description', 100).notNullable();
  })
  .createTable('cvTemplates', table => {
    table.increments('id');
    table.date('creationDate', 45).notNullable();
    table.varchar('cvType', 100).notNullable();
  })
  .createTable('languages', table => {
    table.increments('id');
    table.date('creationDate', 45).notNullable();
    table.varchar('language', 100).notNullable();
  })
  .createTable('professions', table => {
    table.increments('id');
    table.date('creationDate', 45).notNullable();
    table.varchar('profession', 100).notNullable();
  })
  .createTable('genders', table => {
    table.increments('id');
    table.date('creationDate', 45).notNullable();
    table.varchar('gender', 45).notNullable();
  })
  .createTable('subscriptions', table => {
    table.increments('id');
    table.date('subscriptionDate', 45).notNullable();
    table.varchar('subscribe', 100).notNullable();
    table.integer('cvTemplateId').unsigned().nullable();
    table.foreign('cvTemplateId').references('cvTemplates.id');
  })
  .createTable('countries', table => {
    table.increments('id');
    table.date('creationDate', 45).notNullable();
    table.varchar('country', 100).notNullable();
 
  })
  .createTable('states', table => {
    table.increments('id');
    table.date('creationDate', 45).notNullable();
    table.varchar('state', 100).notNullable();
    //table.integer('cityId').references('id').inTable('cities');  // POSTGRE (FK'S)
    table.integer('countryId').unsigned().nullable();     // MYSQL (FK'S)
    table.foreign('countryId').references('countries.id');  //MYSQL  (FK'S)
  })
  .createTable('cities', table => {
    table.increments('id');
    table.date('creationDate', 45).notNullable();
    table.varchar('cityName', 100).notNullable();
    table.integer('stateId').unsigned().nullable();
    table.foreign('stateId').references('states.id');
  })
  .createTable('users', table =>{
    table.increments('id');
    table.date('creationDate', 45).notNullable();
    table.varchar('firstName', 100).notNullable();
    table.varchar('lastName', 100).notNullable();
    table.varchar('email', 100).notNullable();
    table.varchar('password', 100).notNullable();
    table.date('dateOfBirth', 100).notNullable();
    table.varchar('lookingJobAt', 100).notNullable();
    table.integer('userTypeId').unsigned().nullable();
    table.foreign('userTypeId').references('userTypes.id');
    //table.integer('userTypeId').references('id').inTable('userTypes'); // Foreign Key example
    // table.integer('countryId').references('id').inTable('countries'); 
    table.integer('languageId').unsigned().nullable();
    table.foreign('languageId').references('languages.id');
    table.integer('professionId').unsigned().nullable();
    table.foreign('professionId').references('professions.id');
    table.integer('cityId').unsigned().nullable();
    table.foreign('cityId').references('cities.id');
    // table.integer('stateId').references('id').inTable('states'); 
    table.integer('subscriptionId').unsigned().nullable();
    table.foreign('subscriptionId').references('subscriptions.id');
    table.integer('genderId').unsigned().nullable();
    table.foreign('genderId').references('genders.id');
  })
  .createTable('purchases', table =>{
    table.increments('id');
    table.date('creationDate', 45).notNullable();
    table.float('amount', 45).notNullable(); 
    table.integer('userId').unsigned().nullable();
    table.foreign('userId').references('users.id');
    table.integer('cvTemplateId').unsigned().nullable();
    table.foreign('cvTemplateId').references('cvTemplates.id');
    // table.integer('countryId').references('id').inTable('countries'); 
    // table.integer('cityId').references('id').inTable('cities'); 
    // table.integer('stateId').references('id').inTable('states');
    // table.integer('languageId').references('id').inTable('languages'); 
    // table.integer('professionId').references('id').inTable('professions'); 
    table.integer('intNumber').notNullable(); // 52, 12, 65
    table.float('floatNumber').notNullable(); // 12.56 , 8.90
  })
};

exports.down = function(knex, Promise){
  return knex.schema
  .dropTable('purchases')
  .dropTable('users')
  .dropTable('cities')
  .dropTable('states')
  .dropTable('countries')
  .dropTable('subscriptions')
  .dropTable('genders')
  .dropTable('professions')
  .dropTable('languages')
  .dropTable('cvTemplates')
  .dropTable('userTypes')
};
