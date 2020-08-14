const express = require('express');
const CurrentCourse = require('../../models/CurrentCourse/CurrentCourse');

const router = express.Router();

/* GET home page. */
router.get('/currentcourse', async (req, res) => {
  try {
    const course = await CurrentCourse.findOne();
    res.json({ success: true, data: course });
  }catch(e){
    error
  }

});

module.exports = router;
