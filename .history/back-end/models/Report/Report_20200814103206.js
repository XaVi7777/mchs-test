const { Schema, model } = require('mongoose');

const ReportSchema = new Schema({
  rateRangeStart: string
});

module.exports = model('Report', ReportSchema);
