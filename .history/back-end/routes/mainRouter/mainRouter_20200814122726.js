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
      console.log('>>>',date)
      const course = await Course.findOne({ date });
      if (course) {
        console.log(course)
        return res.json({ success: true, data: course });
      } else {
        await requestCourse(date.replace(/\./g, '/'));
        return await getNewCourse(date, ++counter);
      }
    } catch (error) {
      res.json({ error })
    }
  }
  await getNewCourse(date);
});



module.exports = router;
