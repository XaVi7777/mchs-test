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

  const URL = date ? `http://www.cbr.ru/scripts/XML_daily.asp?date_req=${date}` : 'http://www.cbr.ru/scripts/XML_daily.asp';

  request({
    uri: URL,
    method: 'GET',
    encoding: 'binary'
  }, async function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const buffer = Buffer.from(body, 'binary');
      const xml = iconv.decode(buffer, 'win1251')
      const valCourse = JSON.parse((convert.xml2json(xml.toLowerCase(), { compact: true, spaces: 4 })));

      const { date } = valCourse.valcurs._attributes;
      const { valute } = valCourse.valcurs;

      const options = {
        date,
        valute,
      }

      const course = new Course(options);
      await course.save();


    }
  })
  // async function getNewCourse(date, counter = 0) {
  //   if (counter > 0) {
  //     const course = await CurrentCourse.findOne();
  //     return res.json({ success: true, data: course, errorMessage: 'Котировки на указанный день не предоставлялись' })
  //   }
  //   try {
  //    const course = await Course.findOne({ date });
  //     if (course) {
  //       return res.json({ success: true, data: course });
  //     } else {
  //       await requestCourse(date.replace(/\./g, '/'));
  //       return getNewCourse(date, ++counter);
  //     }
  //   } catch (error) {
  //     res.json({ error })
  //   }
  // }
  // await getNewCourse(date);
});



module.exports = router;
