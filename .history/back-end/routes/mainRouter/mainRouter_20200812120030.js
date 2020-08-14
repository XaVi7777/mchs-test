const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const response = await fetch('http://www.cbr.ru/scripts/XML_daily.asp?date_req=02/03/2002')
  res.send('Express server');
});

module.exports = router;
