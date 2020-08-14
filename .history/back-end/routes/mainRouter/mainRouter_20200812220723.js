const express = require('express');
const CurrentCourse = require('./models/CurrentCourse/CurrentCourse');

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  const course = await CurrentCourse.findOne();
  res.json({ course });
});

module.exports = router;
