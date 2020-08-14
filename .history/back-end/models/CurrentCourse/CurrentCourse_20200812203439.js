const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  login: {
    type: String, required: true,
  },
  email: {
    type: String, unique: true, required: true,
  },
  password: {
    type: String, required: true,
  },
  regDate: Date,
  tenders: Array,
  auctions: Array,
  bets: Array,
  money: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    default: ''
  },
  social: Array,
  social: Array,
  auctionsWin: Array
});

module.exports = model('User', UserSchema);
