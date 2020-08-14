const { Schema, model } = require('mongoose');

const ReportSchema = new Schema({
  rateRangeStart
});

module.exports = model('Report', ReportSchema);
