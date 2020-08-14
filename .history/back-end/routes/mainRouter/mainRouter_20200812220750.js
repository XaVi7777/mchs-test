const express = require('express');
const CurrentCourse = require('../');

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  const course = await CurrentCourse.findOne();
  res.json({ course });
});

module.exports = router;
