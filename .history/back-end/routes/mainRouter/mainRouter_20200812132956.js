const express = require('express');
const fetch = require('node-fetch');
const { response } = require('express');

var request = require('request');

var URL = 'http://www.ferra.ru/ru/techlife/news/';

request(URL, function (err, res, body) {
    if (err) throw err;
    console.log(body);
    console.log(res.statusCode);
});
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
