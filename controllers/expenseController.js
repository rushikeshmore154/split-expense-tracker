const Expense = require('../models/Expense');

exports.addExpense = async (req, res) => {
  try {
    const { amount, description, paid_by, participants, split_type, shares } = req.body;
    if (!amount || !description || !paid_by) return res.status(400).json({ message: 'Missing required fields.' });
    if (amount < 0) return res.status(400).json({ message: 'Amount must be positive.' });

    const expense = new Expense({ amount, description, paid_by, participants, split_type, shares });
    await expense.save();
    res.status(201).json({ success: true, data: expense, message: 'Expense added successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateExpense = async (req, res) => {
  try {
    const updated = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Expense not found' });
    res.json({ success: true, data: updated, message: 'Expense updated' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const deleted = await Expense.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Expense not found' });
    res.json({ success: true, message: 'Expense deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
