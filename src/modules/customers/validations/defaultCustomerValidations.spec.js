const defaultCustomerValidations = require('./defaultCustomerValidations')

describe(':: modules :: customers :: validations :: defaultCustomerValidations', () => {
  it('should throw an error if name less than 5 characters', () => {
    expect(() => defaultCustomerValidations('foo', '', '', '')).toThrow(
      'Name must be more than 5 characters',
    )
  })

  it('should throw an error if cpf with invalid format', () => {
    expect(() => defaultCustomerValidations('', '123', '', '')).toThrow(
      'CPF needs to be in this format: 999.999.999-99',
    )
  })

  it('should throw an error if city less than 5 characters', () => {
    expect(() => defaultCustomerValidations('', '', 'foo', '')).toThrow(
      'City must be more than 5 characters',
    )
  })

  it('should throw an error if phone with invalid format', () => {
    expect(() => defaultCustomerValidations('', '', '', '123')).toThrow(
      'Phone needs to be in this format: (99)99999-9999',
    )
  })
})
