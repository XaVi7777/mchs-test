const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const response = await fetch('http://www.cbr.ru/scripts/XML_daily.asp?date_req=12/08/2020');
    const json = await response.json();
    
  }
  res.send('Express server');
});

module.exports = router;
