const { validateName, validateCpf, validateCity, validatePhone } = require('./validateCustomerFields');

describe(':: modules :: customers :: validations :: validateCustomerFields', () => {
  describe(':: validateName ::', () => {
    it('should throw an error if name less than 5 characters', () => {
      expect(() => validateName('foo')).toThrow(
        'Name must be more than 5 characters',
      );
    });
  });

  describe(':: validateCpf ::', () => {
    it('should throw an error if cpf with invalid format', () => {
      expect(() => validateCpf('123')).toThrow(
        'CPF needs to be in this format: 999.999.999-99',
      );
    });
  });

  describe(':: validateCity ::', () => {
    it('should throw an error if city less than 5 characters', () => {
      expect(() => validateCity('foo')).toThrow(
        'City must be more than 5 characters',
      );
    });
  });

  describe(':: validatePhone ::', () => {
    it('should throw an error if phone with invalid format', () => {
      expect(() => validatePhone('123')).toThrow(
        'Phone needs to be in this format: (99)99999-9999',
      );
    });
  });
});
