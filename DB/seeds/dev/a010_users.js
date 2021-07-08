const faker = require('faker');
const moment = require('moment');

const createFakeUsers = () => ({
  creationDate: moment(faker.date.past()).format('YYYY-MM-DD'),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  dateOfBirth: moment(faker.date.past()).format('YYYY-MM-DD'),
  lookingJobAt: faker.name.jobTitle(),
  // afm: faker.datatype.number({ min: 1, max: 100 }),
  userTypeId: faker.datatype.number({ min: 1, max: 1 }),
  languageId: faker.datatype.number({ min: 1, max: 1 }),
  professionId: faker.datatype.float({ min: 1, max: 1 }),
  cityId: faker.datatype.float({ min: 1, max: 1 }),
  subscriptionId: faker.datatype.float({ min: 1, max: 1 }),
  genderId: faker.datatype.float({ min: 1, max: 1 }),
   
});

exports.seed = async function (knex) {
  const fakeUsers = [];
  const desiredFakeUsers = 100;

  for (let i = 0; i < desiredFakeUsers; i++) {
    fakeUsers.push(createFakeUsers());
  }

   await knex('users').insert(fakeUsers);
};
