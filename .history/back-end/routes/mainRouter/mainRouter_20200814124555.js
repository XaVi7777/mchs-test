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
    const URL = newDate ? `http://www.cbr.ru/scripts/XML_daily.asp?date_req=${newDate}` : 'http://www.cbr.ru/scripts/XML_daily.asp';

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
  
        if (newDate) {
          console.log(newDate)
          const course = new Course(options);
          await course.save();
        }
        else {
          const currentCourse = await CurrentCourse.findOneAndUpdate(options) || new CurrentCourse(options);
          await currentCourse.save();
        }
      }
    })
});



module.exports = router;
