const validateOnCreateOrder = require('./validateOnCreateOrder')

describe(':: modules :: orders :: validations :: validateOnCreateOrder', () => {
  it('should throw an error if customerId or total is missing', () => {
    expect(() => validateOnCreateOrder(null, 100, 15)).toThrow(
      'All fields are required',
    )
  })

  it('should throw an error if total is less than or equal to zero', () => {
    expect(() => {
      validateOnCreateOrder('123', 0, 50)
    }).toThrow('Total must be greater than zero')

    expect(() => {
      validateOnCreateOrder('123', -100, 50)
    }).toThrow('Total must be greater than zero')
  })

  it('should throw an error if cashback is greater than total', () => {
    expect(() => validateOnCreateOrder('123', 15, 100)).toThrow(
      'Total must be greater than cashback',
    )
  })

  it('should not throw an error if all validations pass', () => {
    expect(() => validateOnCreateOrder('123', 100, 15)).not.toThrow()
  })
})
