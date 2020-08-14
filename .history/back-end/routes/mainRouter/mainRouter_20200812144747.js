const express = require('express');
const fetch = require('node-fetch');
const URL = 'http://www.cbr.ru/scripts/XML_daily.asp?date_req=02/08/2020';

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  const response = await fetch(URL, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ candidate }),
  });
  console.log(response)
  res.send('hello');
});

module.exports = router;
