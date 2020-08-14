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

  async function getNewCourse(date, counter = 0) {
    if (counter > 1) {
      const course = await CurrentCourse.findOne();
      return res.json({ success: true, data: course, errorMessage: 'Котировки на указанный день не предоставлялись' })
    }
    try {
      const course = await Course.findOne({ date });
      if (course) {
        return res.json({ success: true, data: course });
      } else {
        requestCourse(date.replace(/\./g, '/'));
        return getNewCourse(date, ++counter);
      }
    } catch (error) {
      res.json({ error })
    }
  }
  getNewCourse(date);
});

router.post('report',)

module.exports = router;
