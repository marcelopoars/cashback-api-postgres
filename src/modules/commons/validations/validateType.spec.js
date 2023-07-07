const validateType = require('./validateType');

describe(':: modules :: commons :: validations :: validateType', () => {
  it('should throw an error if name with invalid type', () => {
    expect(() => validateType({ value: 123, fieldName: 'name' })).toThrow(
      'Field name with invalid type',
    );
  });

  it('should throw an error if amount with invalid type', () => {
    expect(() =>
      validateType({ value: '123', fieldName: 'amount', type: 'number' }),
    ).toThrow('Field amount with invalid type');
  });
});
