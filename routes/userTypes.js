const express = require('express');
const pool = require('../connection/connection');

const router = express.Router();

/* GET method */
router.get('/', (req, res) => {
  try {
    pool.query('SELECT * FROM usertypes', (error, results) => {
      if (error) {
        // res.send(results);
        console.log(error, 'Error getting the result');
      } else {
        console.log(results, 'Success');
      }
      res.send(results);
    });
  } catch (error) {
    if (error) console.error(`Error: ${error.message} lathos`);
  }
});

/* Specific GET method */
router.get('/:id', (req, res) => {
  try {
    pool.query(
      `SELECT * FROM usertypes WHERE id=${req.params.id}`,
      (error, results) => {
        if (!error) {
          res.send(results);
          // console.log(results[0].id);
        } else {
          console.log(error);
        }
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
      `INSERT INTO usertypes (creationDate, fullName, userType, description) 
      VALUES (
        '${req.body.creationDate}',
        '${req.body.fullName}',
        '${req.body.userType}',
        '${req.body.description}')`,
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
        UPDATE usertypes SET 
        creationDate='${req.body.creationDate}',
        fullName='${req.body.fullName}',
        userType='${req.body.userType}',
        description='${req.body.description}'
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
    pool.query(
      `DELETE FROM usertypes WHERE id=${req.params.id}`,
      (error, results) => {
        if (!error) {
          res.send('Deleted entry.');
          // console.log(results[0].id);
        } else {
          console.log(error);
        }
      }
    );
  } catch (error) {
    console.error(`Error: ${error}`);
  }
});

module.exports = router;
