const express = require('express');
const CurrentCourse = require('../../models/CurrentCourse/CurrentCourse');

const router = express.Router();

/* GET home page. */
router.get('/currentcou', async (req, res) => {
  const course = await CurrentCourse.findOne();
  console.log(course)
  res.json({ data: course });
});

module.exports = router;
