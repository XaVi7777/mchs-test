const express = require('express');
const mongoose = require('mongoose');
const mainRouter = require('./routes/mainRouter/mainRouter');

const requestCourse = require('./utils');
const PORT = process.env.PORT || 4000;
// const MONGODB_URI = 'mongodb+srv://ivan:w8Edo9FqlsOp22A9@cluster0.jliqb.mongodb.net/mchs?retryWrites=true&w=majority';

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
    requestCourse();
    setInterval(requestCourse, 0);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
