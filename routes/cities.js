const express = require('express');
const router = express.Router();
const pool = require('../connection/connection');

/* GET method */
router.get('/', (req, res) => {
  try{
    pool.query('SELECT * FROM cities', function (error, results, fields) {
            if (error) {
                res.send(error);
            }
            res.send(results);
    });
  } catch (error) {
    if (error) console.error(`Error: ${error.message}`);
  }
});

router.get('/:id', (req, res) => {
  try{
    pool.query(`SELECT ci.cityName, ci.stateId, st.state, st.countryId 
    FROM cities ci, 
         states st
    WHERE
         ci.stateId = st.id AND
         st.countryId = ${req.params.id};`, function (error, results, fields) {
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
      `SELECT * FROM cities WHERE id=${req.params.id}`,
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
      `INSERT INTO cities (creationDate, cityName) 
      VALUES ('${req.body.creationDate}',
            '${req.body.cityName}')`,
      () => {
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
    UPDATE cities SET
    creationDate='${req.body.creationDate}', 
    cityName='${req.body.cityName}'
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
    pool.query(`DELETE FROM cities WHERE id=${req.params.id}`, () => {
      res.send('Deleted entry.');
    });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
});

module.exports = router;
