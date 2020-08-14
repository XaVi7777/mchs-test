const express = require('express');
const fetch = require('node-fetch');
const { response } = require('express');
const request = require('request');

const URL = 'http://www.cbr.ru/scripts/XML_daily.asp?date_req=02/08/2020';

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {

    request(URL, function (err, res, body) {
      if (err) throw err;
      console.log(body);
      console.log(res.statusCode);
  });
  }
  catch (e) {
    console.log(e)
  }
  res.send(response);
});

module.exports = router;
