const express = require('express');
const fetch = require('node-fetch');
const URL = 'http://www.cbr.ru/scripts/XML_daily.asp?date_req=02/08/2020';

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {

  const response = await fetch('https://cors-anywhere.herokuapp.com/http://www.cbr.ru/scripts/XML_daily.asp?date_req=11/08/2020');
  const text = await response.text();

  // const result = convert.xml2json(text, { compact: true, spaces: 4 });
  console.log(result)
  res.send('hello');
});

module.exports = router;
