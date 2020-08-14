const express = require('express');
const mongoose = require('mongoose');
const mainRouter = require('./routes/mainRouter/mainRouter');
const request = require('request');
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

    const Iconv = require('iconv').Iconv;

    request({
      uri: 'http://www.cbr.ru/scripts/XML_daily.asp?date_req=11/08/2020',
      method: 'GET',
      encoding: 'binary'
    },
      function (error, response, body) {
// console.log( body)
        const body2 = new Buffer(body, 'binary');
        console.log( body)
        // conv = Iconv('windows-1251', 'utf8');
        // body2 = conv.convert(body).toString();

      });
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
