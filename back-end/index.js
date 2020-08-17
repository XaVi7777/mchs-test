const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const mainRouter = require('./routes/mainRouter/mainRouter');

const options = require('./options');
const requestCourse = require('./utils');
const PORT = process.env.PORT || 4000;


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRouter);

async function start() {
  try {
    await mongoose.connect(options.MONGODB_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    requestCourse();
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
