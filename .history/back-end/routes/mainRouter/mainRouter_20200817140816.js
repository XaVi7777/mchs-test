const express = require('express');
const fs = require("fs");
const CurrentCourse = require('../../models/CurrentCourse/CurrentCourse');
const Course = require('../../models/Course/Course');
const request = require('request');
const Buffer = require('buffer').Buffer;
const iconv = require('iconv-lite');
const convert = require('xml-js');

const router = express.Router();
/* GET home page. */
router.get('/currentcourse', async (req, res) => {
  try {
    const course = await CurrentCourse.findOne();
    const fileTitle = `/${course.date.replace(/\./g, '-')}.json`;
    fs.writeFile(`public/${fileTitle}`, JSON.stringify(course), function (error) {
      if (error) throw error; // если возникла ошибка
    });
    res.json({ success: true, data: course, link: fileTitle });
  } catch (error) {
    res.json({ error })
  }
});

router.post('/currentcourse', async (req, res) => {
  const { date } = req.body;

  const URL = `${op?date_req=${date}`;

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
      const fileTitle = `/${course.date.replace(/\./g, '-')}.json`;
      fs.writeFile(`public/${fileTitle}`, JSON.stringify(course), function (error) {
        if (error) throw error; // 
      });
      res.json({ success: true, data: options, link: fileTitle })
    }
  })
});

module.exports = router;