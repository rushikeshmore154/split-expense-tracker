function calculateBalances(expenses) {
  const balances = {};
  for (let exp of expenses) {
    const { amount, paid_by, participants, split_type, shares } = exp;
    let split = {};

    if (split_type === 'equal') {
      const share = amount / participants.length;
      participants.forEach(p => split[p] = share);
    } else if (split_type === 'exact') {
      split = Object.fromEntries(shares);
    } else if (split_type === 'percentage') {
      participants.forEach(p => {
        split[p] = (shares[p] / 100) * amount;
      });
    }

    participants.forEach(p => {
      if (!balances[p]) balances[p] = 0;
      balances[p] -= split[p];
    });

    if (!balances[paid_by]) balances[paid_by] = 0;
    balances[paid_by] += amount;
  }

  return balances;
}

module.exports = calculateBalances;
