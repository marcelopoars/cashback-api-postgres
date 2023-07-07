const calculateAmountPerOrder = require('./calculateAmountPerOrder');

describe(':: modules :: orders :: utils :: calculateAmountPerOrder', () => {
  it('should not give a discount if currentCustomerCashback equal zero', () => {
    expect(calculateAmountPerOrder(100, 0)).toBe(100);
  });

  it('should give 15% off', () => {
    expect(calculateAmountPerOrder(100, 15)).toBe(85);
  });
});
