const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('Express server');
});

module.exports = router;
