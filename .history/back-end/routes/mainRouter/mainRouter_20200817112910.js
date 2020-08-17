const express = require('express');
const CurrentCourse = require('../../models/CurrentCourse/CurrentCourse');
const Course = require('../../models/Course/Course');
const requestCourse = require('../../utils');
const request = require('request');
const Buffer = require('buffer').Buffer;
const iconv = require('iconv-lite');
const convert = require('xml-js');

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

  const URL = `http://www.cbr.ru/scripts/XML_daily.asp?date_req=${date}`;

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
      res.json({ success: true, data: options })

    }
  })
});

router.get('/currentcourse/:date', async (req, res) => {
  try {
    console.log(req.params.date)
    res.json({ success: true, data: course });
  } catch (error) {
    res.json({ error })
  }
});

module.exports = router;