const Expense = require('../models/Expense');
const calculateBalances = require('../utils/calculateBalances');

exports.getPeople = async (req, res) => {
  try {
    const expenses = await Expense.find();
    const people = new Set();
    expenses.forEach(exp => {
      people.add(exp.paid_by);
      exp.participants.forEach(p => people.add(p));
    });
    res.json([...people]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBalances = async (req, res) => {
  try {
    const expenses = await Expense.find();
    const balances = calculateBalances(expenses);
    res.json(balances);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSettlements = async (req, res) => {
  try {
    const expenses = await Expense.find();
    const balances = calculateBalances(expenses);

    const creditors = [], debtors = [];
    for (let [person, balance] of Object.entries(balances)) {
      if (balance > 0) creditors.push({ person, amount: balance });
      else if (balance < 0) debtors.push({ person, amount: -balance });
    }

    const settlements = [];
    let i = 0, j = 0;
    while (i < debtors.length && j < creditors.length) {
      const debtor = debtors[i];
      const creditor = creditors[j];
      const min = Math.min(debtor.amount, creditor.amount);

      settlements.push({ from: debtor.person, to: creditor.person, amount: min });
      debtor.amount -= min;
      creditor.amount -= min;

      if (debtor.amount === 0) i++;
      if (creditor.amount === 0) j++;
    }

    res.json(settlements);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
