function calculateAmountPerOrder(total, cashback) {
  return cashback === 0 ? total : Number((total - cashback).toFixed(2));
}

module.exports = calculateAmountPerOrder;
