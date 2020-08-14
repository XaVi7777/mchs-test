const { Schema, model } = require('mongoose');

const ReportSchema = new Schema({
  rateRangeStart: String,
  rateRangeStart: String,
});

module.exports = model('Report', ReportSchema);
