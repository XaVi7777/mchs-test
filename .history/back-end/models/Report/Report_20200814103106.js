const { Schema, model } = require('mongoose');

const ReportSchema = new Schema({
  date: String,
  valute: Array,
});

module.exports = model('Course', CourseSchema);
