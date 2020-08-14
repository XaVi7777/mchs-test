const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  const response
  res.send('Express server');
});

module.exports = router;
