const { Schema, model } = require('mongoose');

const CurrentCourseSchema = new Schema({
  date: String,
  valute: Array,
  link: String,
});

module.exports = model('CurrentCourse', CurrentCourseSchema);
