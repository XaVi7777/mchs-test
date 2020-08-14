const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const response = await
  res.send('Express server');
});

module.exports = router;
