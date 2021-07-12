const faker = require('faker');
const moment = require('moment');

/*function isNotBIO() {
  let country = faker.address.country();

  while (country === 'British Indian Ocean Territory (Chagos Archipelago)') {
    country = faker.address.country();
  }

  return country;
} */

const createFakeCVTempaltes = () => ({
  creationDate: moment(faker.date.past()).format('YYYY-MM-DD'),
  cvType: faker.lorem.word(),
});

exports.seed = async function (knex) {
  const fakeCVTemplates = [];
  const desiredFakeCVTempaltes = 100;

  for (let i = 0; i < desiredFakeCVTempaltes; i += 1) {
    fakeCVTemplates.push(createFakeCVTempaltes());
  }

  await knex('cvTemplates').insert(fakeCVTemplates);
};
