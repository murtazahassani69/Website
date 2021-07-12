const faker = require('faker');
const moment = require('moment');

// function isNotBIO() {
//   let country = faker.address.country();

//   while (country === 'British Indian Ocean Territory (Chagos Archipelago)') {
//     country = faker.address.country();
//   }

//   return country;
// }

const createFakeLanguages = () => ({
  creationDate: moment(faker.date.past()).format('YYYY-MM-DD'),
  language: faker.address.timeZone(),
});

exports.seed = async function (knex) {
  const fakeLanguages = [];
  const desiredFakeLanguages = 10;

  for (let i = 0; i < desiredFakeLanguages; i++) {
    fakeLanguages.push(createFakeLanguages());
  }

  await knex('languages').insert(fakeLanguages);
};
