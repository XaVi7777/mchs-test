const { Schema, model } = require('mongoose');

const CurrentCourseSchema = new Schema({
  date: Date,
  valute: Array
});

module.exports = model('CurrentCourse', CurrentCourseSchema);
