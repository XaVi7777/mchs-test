const express = require('express');
const fetch = require('node-fetch');
const CurrentCourse = require('../../models/CurrentCourse/CurrentCourse');
const Course = require('../../models/Course/Course');
const requestCourse = require('../../utils');

const router = express.Router();
/* GET home page. */
router.get('/currentcourse', async (req, res) => {
  try {
    const course = await CurrentCourse.findOne();
    res.json({ success: true, data: course });
  } catch (error) {
    res.json({ error })
  }
});

router.post('/currentcourse', async (req, res) => {
  const { date } = req.body;

  try {
    const course = await Course.findOne({ date });
    if (course) {
      res.json({ success: true, data: course });
    } else {
      await requestCourse(date.replace(/\./g, '/'));
      let course;
      setTiInterval(() => {
        course = await CurrentCourse.findOne();
      }, 0);
      res.json({ success: true, data: course });
    }
  } catch (error) {
    res.json({ error })
  }
});
module.exports = router;
