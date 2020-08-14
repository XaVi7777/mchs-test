const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  try { }
  catch (e) {
    console.log(e)
  }
  res.send('Express server');
});

module.exports = router;
