const { Schema, model } = require('mongoose');

const ReportSchema = new Schema({
  rateRangeStart: String,
  rateRangeFinish: String,
  
});

module.exports = model('Report', ReportSchema);
