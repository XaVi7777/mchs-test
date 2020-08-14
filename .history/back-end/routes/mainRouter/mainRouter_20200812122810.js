const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  try {
    const response = await fetch('http://www.cbr.ru/scripts/XML_daily.asp?date_req=02/03/2002')
  }
  catch (e) {
    console.log(e)
  }
  res.send('Express server');
});

module.exports = router;
