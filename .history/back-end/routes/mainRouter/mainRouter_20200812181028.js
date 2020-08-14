const express = require('express');
const fetch = require('node-fetch');
var iconv = require('iconv-lite');

const URL = 'http://www.cbr.ru/scripts/XML_daily.asp?date_req=02/08/2020';

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
//   var iconv = new Iconv('windows-1251','UTF-8');
// console.log(iconv)
  const xml = await fetch('http://www.cbr.ru/scripts/XML_daily.asp?date_req=11/08/2020');
 await xml.text()
  //const buf = iconv.encode(xml, 'win1251');
  // const text = await iconv.convert(xml);
  // console.log(xml)
  //   .then(res => {
  //     console.log(res.headers.raw()['content-type']);
  //     iconv.convert(res.text())
  //     return res.text()
  //   })
  //   .then(body => console.log(body))
  // const response = await fetch('https://cors-anywhere.herokuapp.com/http://www.cbr.ru/scripts/XML_daily.asp?date_req=11/08/2020');
  // windows-1251
  // const text = await response.text();

  // // const result = convert.xml2json(text, { compact: true, spaces: 4 });
  // console.log(text)
  res.send('hello');
});

module.exports = router;
