const express = require('express');
const CurrentCourse = require('../../models/CurrentCourse/CurrentCourse');

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

router.get('/currentcourse/:date', async (req, res) => {
  console.log(req.body.params.date)
  try {
    const course = await CurrentCourse.findOne();
    res.json({ success: true, data: course });
  } catch (error) {
    res.json({ error })
  }
});
module.exports = router;
