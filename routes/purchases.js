const express = require('express');
const router = express.Router();
const pool = require('../connection/connection');

/* GET method */
router.get('/', (req, res) => {
  try {
    pool.query('SELECT * FROM purchases', function (error, results, fields) {
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
      `SELECT * FROM purchases WHERE id=${req.params.id}`,
      (error, results) => {
        res.send(results);
      }
    );
  } catch (error) {
    console.error(`Error ${error}`);
  }
});

/* POST method */
router.post('/', [admin], (req, res) => {
  try {
    pool.query(
      `INSERT INTO purchases (creationDate, fullName, cvType, amount, intNumber, floatNumber) 
      VALUES ('${req.body.creationDate}',
    '${req.body.fullName}',
    '${req.body.cvType}',
    '${req.body.amount}',
    '${req.body.intNumber}',
    '${req.body.floatNumber}'
    )`,
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
    UPDATE purchases SET
    creationDate='${req.body.creationDate}',
    fullName='${req.body.fullName}',
    cvType='${req.body.cvType}',
    amount='${req.body.amount}',
    intNumber='${req.body.intNumber}',
    floatNumber='${req.body.floatNumber}'
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
    pool.query(`DELETE FROM purchases WHERE id=${req.params.id}`, () => {
      res.send('Deleted entry.');
    });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
});

module.exports = router;
