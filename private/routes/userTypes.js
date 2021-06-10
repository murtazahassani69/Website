const express = require('express');
const pool = require('../connection/connection');

const router = express.Router();

/* GET method */
router.get('/userTypes', (req, res) => {
  try {
    pool.query('SELECT * FROM userTypes', (error, results) => {
      if(error){
        // res.send(results);
        console.log(error, "Error getting the result");
      } else {
        console.log(results, "Success");
      }
      res.send(results);
    });
  } catch (error) {
    if (error) console.error(`Error: ${error.message}`);
  }
});

/* Specific GET method */
router.get('/userTypes/:id', (req, res) => {
  try {
    pool.query(
      `SELECT * FROM userTypes WHERE id=${req.params.id}`, (error, results) => {
        if(!error) {
            res.send(results)
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
router.post('/userTypes', (req, res) => {
  try {
    pool.query(
      `INSERT INTO userTypes (userId, creationDate, name, description) 
      VALUES (
        '${req.body.userId}',
        '${req.body.creationDate}',
        '${req.body.name}',
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
router.put('/userTypes/:id', (req, res) => {
  try {
    pool.query(
      `
        UPDATE userTypes SET 
        user-id='${req.body.userId}',
        date='${req.body.creationDate}',
        name='${req.body.name}',
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
router.delete('/userTypes/:id', (req, res) => {
  try {
    pool.query(`DELETE FROM userTypes WHERE id=${req.params.id}`, (error, results) => {
      if(!error) {
        res.send('Deleted entry.')
        // console.log(results[0].id);
      } else {
        console.log(error);
      }
    });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
});

module.exports = router;