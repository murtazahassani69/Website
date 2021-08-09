const express = require('express');
const router = express.Router();
const pool = require('../connection/connection');

/* GET method */
router.get('/', (req, res) => {
  try{
    pool.query('SELECT * FROM users', function (error, results, fields) {
            if (error) {
                res.send(error);
            }
            res.send(results);
    });
  } catch (error) {
    if (error) console.error(`Error: ${error.message}`);
  }
});

/* Specific GET method */
router.get('/:id', (req, res) => {
  try {
    pool.query(
      `SELECT * FROM users WHERE id=${req.params.id}`,
      (error, results) => {
        res.send(results);
      }
    );
  } catch (error) {
    console.error(`Error ${error}`);
  }
});

/* POST method */
router.post('/', (req, res) => {
  try {
    pool.query(
      `INSERT INTO users (creationDate, firstName, lastName, email, password, dateOfBirth, lookingJobAt,
        userTypeId, languageId, professionId, genderId, cityId ) 
      VALUES ('${req.body.creationDate}',
              '${req.body.firstName}',
              '${req.body.lastName}',
              '${req.body.email}',
              '${req.body.password}',
              '${req.body.dateOfBirth}',
              '${req.body.lookingJobAt}',
              '${req.body.userTypeId}',
              '${req.body.languageId}',
              '${req.body.professionId}',
              '${req.body.genderId}',
              '${req.body.cityId}'
              )`,
      () => {console.log(req.body);
        res.send('Posted successfully.');
      }
    );
  } catch (error) {
    console.error(`Error: ${error}`);
  }
});

/* PUT method */
router.put('/:id', (req, res) => {
  try {
    pool.query(
      `
    UPDATE users SET
    street='${req.body.creationDate}',
    street_no='${req.body.firstName}',
    region='${req.body.lastName}',
    zipcode='${req.body.email}',
    country_id='${req.body.password}',
    country_id='${req.body.language}',
    country_id='${req.body.dateOfBirth}',
    country_id='${req.body.profession}',
    country_id='${req.body.lookingJobAt}',
    state_id='${req.body.gender}'
    WHERE id=${req.params.id}
    `,
      () => {
        res.send('Updated entry.');
        //pool.end();
      }
    );
  } catch (error) {
    console.error(`Error: ${error}`);
  }
});

/* DELETE method */
router.delete('/:id', (req, res) => {
  try {
    pool.query(`DELETE FROM users WHERE id=${req.params.id}`, () => {
      res.send('Deleted entry.');
    });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
});

module.exports = router;
