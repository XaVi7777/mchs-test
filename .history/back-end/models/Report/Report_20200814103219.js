const { Schema, model } = require('mongoose');

const ReportSchema = new Schema({
  rateRangeStart: String,
  rateRangeStart: S,
});

module.exports = model('Report', ReportSchema);
