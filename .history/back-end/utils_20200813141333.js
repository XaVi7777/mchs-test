const request = require('request');
const Buffer = require('buffer').Buffer;
const iconv = require('iconv-lite');
const convert = require('xml-js');

const CurrentCourse = require('./models/CurrentCourse/CurrentCourse');

module.exports = function requestCourse(date) {
  const URL = date ? `http://www.cbr.ru/scripts/XML_daily.asp?date_req=${date}` : 'http://www.cbr.ru/scripts/XML_daily.asp';
  console.log('>>>', URL)
  request({
    uri: URL,
    method: 'GET',
    encoding: 'binary'
  }, async function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const buffer = Buffer.from(body, 'binary');
      const xml = iconv.decode(buffer, 'win1251')
      const valCourse = JSON.parse((convert.xml2json(xml.toLowerCase(), { compact: true, spaces: 4 })));
      console.log(valCourse)
      const { date } = valCourse.valcurs._attributes;
      const { valute } = valCourse.valcurs;

      const options = {
        date:date.replace(),
        valute,
      }

      const course = await CurrentCourse.findOneAndUpdate(options) || new CurrentCourse(options);
      await course.save();
    }
  })
}
