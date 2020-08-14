const { Schema, model } = require('mongoose');

const ReportSchema = new Schema({
  rateRangeStart: String,
  rateRangeFinish: String,
  report:{
    nominal: Number,
    course: Number,
    date
  }
});

module.exports = model('Report', ReportSchema);
