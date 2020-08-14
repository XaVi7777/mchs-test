const { Schema, model } = require('mongoose');

const CurrentCourseSchema = new Schema({
  date: Date,
});

module.exports = model('CurrentCourse', CurrentCourseSchema);
