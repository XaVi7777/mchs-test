module.exports = router;function requestCourse() {
  request({
    uri: 'http://www.cbr.ru/scripts/XML_daily.asp?date_req=10/08/2020',
    method: 'GET',
    encoding: 'binary'
  }, async function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const buffer = Buffer.from(body, 'binary');
      const xml = iconv.decode(buffer, 'win1251')
      const valCourse = JSON.parse((convert.xml2json(xml.toLowerCase(), { compact: true, spaces: 4 })));
      const { date } = valCourse.valcurs._attributes
      const { valute } = valCourse.valcurs
      const course = new CurrentCourse({
        date,
        valute,
      });
      await course.save();
    }
  })
}
