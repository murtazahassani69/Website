const faker = require('faker');
const moment = require('moment');

// function isNotBIO() {
//   let country = faker.address.country();

//   while (country === 'British Indian Ocean Territory (Chagos Archipelago)') {
//     country = faker.address.country();
//   }

//   return country;
// }

const createFakeUserTypes = () => ({
  creationDate: moment(faker.date.past()).format('YYYY-MM-DD'),
  userType: faker.system.fileName(),
  description: faker.lorem.sentence(),
});

exports.seed = async function (knex) {
  const fakeUserTypes = [];
  const desiredFakeUserTypes = 100;

  for (let i = 0; i < desiredFakeUserTypes; i++) {
    fakeUserTypes.push(createFakeUserTypes());
  }

  await knex('userTypes').insert(fakeUserTypes);
};
