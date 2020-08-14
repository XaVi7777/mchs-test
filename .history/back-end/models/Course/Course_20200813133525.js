const { Schema, model } = require('mongoose');

const CourseSchema = new Schema({
  date: String,
  valute: Array,
});

module.exports = model('CurrentCourse', CurrentCourseSchema);
