// models/Expense.js
const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  paid_by: { type: String, required: true },
  participants: [String],
  split_type: { type: String, enum: ['equal', 'percentage', 'exact'], default: 'equal' },
  shares: { type: Map, of: Number }
}, { timestamps: true });

module.exports = mongoose.model('Expense', expenseSchema);
