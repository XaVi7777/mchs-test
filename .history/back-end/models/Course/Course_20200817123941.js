const { Schema, model } = require('mongoose');

const CourseSchema = new Schema({
  date: String,
  valute: Array,
  link: String,
});

module.exports = model('Course', CourseSchema);
