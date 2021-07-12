const express = require("express");
const router = express.Router();
const pool = require("../connection/connection");

/* GET method */
router.get("/", (req, res) => {
  try {
    pool.query("SELECT * FROM cvtemplates", function (error, results, fields) {
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
router.get("/:id", (req, res) => {
  try {
    pool.query(
      `SELECT * FROM cvtemplates WHERE id=${req.params.id}`,
      (error, results) => {
        res.send(results);
      }
    );
  } catch (error) {
    console.error(`Error ${error}`);
  }
});

/* POST method */
router.post("/", (req, res) => {
  try {
    pool.query(
      `INSERT INTO cvtemplates (creationDate, cvType) 
       VALUES (
    '${req.body.creationDate}',
    '${req.body.cvType}'
    )`,
      () => {
        res.send("Posted successfully.");
      }
    );
  } catch (error) {
    console.error(`Error: ${error}`);
  }
});

/* PUT method */
router.put("/:id", (req, res) => {
  try {
    pool.query(
      `
    UPDATE cvtemplates SET 
    '${req.body.creationDate}',
    '${req.body.cvType}'
    `,
      () => {
        res.send("Updated entry.");
        //pool.end();
      }
    );
  } catch (error) {
    console.error(`Error: ${error}`);
  }
});

/* DELETE method */
router.delete("/:id", (req, res) => {
  try {
    pool.query(`DELETE FROM cvtemplates WHERE id=${req.params.id}`, () => {
      res.send("Deleted entry.");
    });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
});

module.exports = router;
