const { Schema, model } = require('mongoose');

const CurrentCourseSchema = new Schema({
  date: STr,
  valute: Array,
});

module.exports = model('CurrentCourse', CurrentCourseSchema);
