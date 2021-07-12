const faker = require('faker');
const moment = require('moment');

// function isNotBIO() {
//   let country = faker.address.country();

//   while (country === 'British Indian Ocean Territory (Chagos Archipelago)') {
//     country = faker.address.country();
//   }

//   return country;
// }

const createFakeProfessions = () => ({
  creationDate: moment(faker.date.past()).format('YYYY-MM-DD'),
  profession: faker.address.country(),
});

exports.seed = async function (knex) {
  const fakeProfessions = [];
  const desiredFakeProfessions = 100;

  for (let i = 0; i < desiredFakeProfessions; i++) {
    fakeProfessions.push(createFakeProfessions());
  }

  await knex('professions').insert(fakeProfessions);
};
