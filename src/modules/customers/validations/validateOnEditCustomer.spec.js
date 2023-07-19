const { validateOnEditCustomer } = require('.')

describe(':: modules :: customers :: validations :: validateOnEditCustomer', () => {
  it('should throw an error if all fields are empty', () => {
    expect(() => validateOnEditCustomer()).toThrow('No field was informed')
  })

  it('should not throw an error if all validations pass', () => {
    expect(() =>
      validateOnEditCustomer(
        'Maria',
        '999.999.999-99',
        'Porto Alegre',
        '(99)99999-9999',
      ),
    ).not.toThrow()
  })
})
