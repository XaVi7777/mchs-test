const express = require('express');
const mongoose = require('mongoose');
const mainRouter = require('./routes/mainRouter/mainRouter');
const request = require('request');
const Buffer = require('buffer').Buffer;
const Iconv = require('iconv').Iconv;

const PORT = process.env.PORT || 4000;
const MONGODB_URI = 'mongodb://localhost:27017/mchs';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', mainRouter);

async function start() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

//    request({
//       uri: 'http://www.cbr.ru/scripts/XML_daily.asp?date_req=11/08/2020',
//       method: 'GET',
//       encoding: 'binary'
//     },
function (error, response, body) {
  if(!error && response.statusCode===200){
  var body = iconv.encode (iconv.decode (new Buffer (body, 'binary'), 'win1251'), 'utf8')
  }
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   } catch (e) {
//     console.log(e);
//   }
}

start();
