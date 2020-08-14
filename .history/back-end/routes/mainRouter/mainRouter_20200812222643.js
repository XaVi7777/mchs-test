const express = require('express');
const CurrentCourse = require('../../models/CurrentCourse/CurrentCourse');

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  const course = await CurrentCourse.findOne();
  console.log()
  res.json({ data: course });
});

module.exports = router;
