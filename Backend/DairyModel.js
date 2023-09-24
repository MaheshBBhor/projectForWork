// DairyModel.js
const mongoose = require('mongoose');

const dairySchema = new mongoose.Schema({
  product_name: String,
  fat_content: Number,
//   date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Dairy', dairySchema);
