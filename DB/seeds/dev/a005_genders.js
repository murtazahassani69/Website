const faker = require('faker');
const moment = require('moment');

// function isNotBIO() {
//   let country = faker.address.country();

//   while (country === 'British Indian Ocean Territory (Chagos Archipelago)') {
//     country = faker.address.country();
//   }

//   return country;
// }

const createFakeGenders = () => ({
  creationDate: moment(faker.date.past()).format('YYYY-MM-DD'),
  gender: faker.name.gender(),
});

exports.seed = async function (knex) {
  const fakeGenders = [];
  const desiredFakeGenders = 3;

  for (let i = 0; i < desiredFakeGenders; i++) {
    fakeGenders.push(createFakeGenders());
  }

  await knex('genders').insert(fakeGenders);
};
