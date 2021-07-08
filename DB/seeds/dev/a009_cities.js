const faker = require('faker');
const moment = require('moment');

// function isNotBIO() {
//   let country = faker.address.country();

//   while (country === 'British Indian Ocean Territory (Chagos Archipelago)') {
//     country = faker.address.country();
//   }

//   return country;
// }

const createFakeCities = () => ({
  creationDate: moment(faker.date.past()).format('YYYY-MM-DD'),
  cityName: faker.address.city(),
  stateId: faker.datatype.float({ min: 1, max: 1 }),
});

exports.seed = async function (knex) {
  const fakeCities = [];
  const desiredFakeCities = 100;

  for (let i = 0; i < desiredFakeCities; i++) {
    fakeCities.push(createFakeCities());
  }

  await knex('cities').insert(fakeCities);
};
