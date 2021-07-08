const faker = require('faker');
const moment = require('moment');

// function isNotBIO() {
//   let country = faker.address.country();

//   while (country === 'British Indian Ocean Territory (Chagos Archipelago)') {
//     country = faker.address.country();
//   }

//   return country;
// }

const createFakePurchase = () => ({
  creationDate: moment(faker.date.past()).format('YYYY-MM-DD'),
  amount: faker.commerce.price(), 
  userId: faker.datatype.number({ min: 1, max: 1 }),
  cvTemplateId: faker.datatype.number({ min: 1, max: 1 }),
  intNumber: faker.commerce.price(),
  floatNumber: faker.commerce.price(),
});

exports.seed = async function (knex) {
  const fakePurchases = [];
  const desiredFakePurchases = 100;

  for (let i = 0; i < desiredFakePurchases; i += 1) {
    fakePurchases.push(createFakePurchase());
  }

  await knex('purchases').insert(fakePurchases);
};
