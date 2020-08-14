const express = require('express');
const fetch = require('node-fetch');
const request = require('request');

const URL = 'http://www.cbr.ru/scripts/XML_daily.asp?date_req=02/08/2020';

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  const response = await fetch(URL)
  console.log(response)
  res.send(response);
});

module.exports = router;
