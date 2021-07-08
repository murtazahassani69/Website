const faker = require('faker');
const moment = require('moment');

// function isNotBIO() {
//   let country = faker.address.country();

//   while (country === 'British Indian Ocean Territory (Chagos Archipelago)') {
//     country = faker.address.country();
//   }

//   return country;
// }

const createFakeSubscriptions = () => ({
  subscriptionDate: moment(faker.date.past()).format('YYYY-MM-DD'),
  subscribe: faker.lorem.word(),
  cvTemplateId: faker.datatype.float({ min: 1, max: 1 }),
});

exports.seed = async function (knex) {
  const fakeSubscriptions = [];
  const desiredFakeSubscriptions = 100;

  for (let i = 0; i < desiredFakeSubscriptions; i++) {
    fakeSubscriptions.push(createFakeSubscriptions());
  }

  await knex('subscriptions').insert(fakeSubscriptions);
};
