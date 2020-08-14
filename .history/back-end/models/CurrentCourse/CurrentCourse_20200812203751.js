const { Schema, model } = require('mongoose');

const CurrentCourseSchema = new Schema({
  date: Date,
  valute
});

module.exports = model('CurrentCourse', CurrentCourseSchema);
