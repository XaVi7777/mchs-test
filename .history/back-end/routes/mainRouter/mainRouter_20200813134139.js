const express = require('express');
const CurrentCourse = require('../../models/CurrentCourse/CurrentCourse');
const Course = require('../../models/Course/Course');
const router = express.Router();
const requestCourse = require('../../')
/* GET home page. */
router.get('/currentcourse', async (req, res) => {
  try {
    const course = await CurrentCourse.findOne();
    res.json({ success: true, data: course });
  } catch (error) {
    res.json({ error })
  }
});

router.get('/currentcourse/:date', async (req, res) => {
  const date = req.params.date.replace(/-/g, '.');
  console.log(date)
  try {
    const course = await Course.findOne({ date });
    res.json({ success: true, data: course });
  } catch (error) {
    res.json({ error })
  }

});
module.exports = router;
