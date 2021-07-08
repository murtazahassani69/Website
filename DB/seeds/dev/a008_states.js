const faker = require('faker');
const moment = require('moment');

// function isNotBIO() {
//   let country = faker.address.country();

//   while (country === 'British Indian Ocean Territory (Chagos Archipelago)') {
//     country = faker.address.country();
//   }

//   return country;
// }

const createFakeStates = () => ({
  creationDate: moment(faker.date.past()).format('YYYY-MM-DD'),
  state: faker.address.state(),
  countryId: faker.datatype.float({ min: 1, max: 1 }),
});

exports.seed = async function (knex) {
  const fakeStates = [];
  const desiredFakeStates = 100;

  for (let i = 0; i < desiredFakeStates; i++) {
    fakeStates.push(createFakeStates());
  }

  await knex('states').insert(fakeStates);
};
