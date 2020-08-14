const express = require('express');
const fetch = require('node-fetch');
const { response } = require('express');
const request = require('request');

const URL = 'http://www.cbr.ru/scripts/XML_daily.asp?date_req=02/08/2020';


const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  try {
    const response = await fetch('http://www.cbr.ru/scripts/XML_daily.asp?date_req=11/08/2020');
    // const json = await response.json();
    console.log(response);
  }
  catch (e) {
    console.log(e)
  }
  res.send(response);
});

module.exports = router;
