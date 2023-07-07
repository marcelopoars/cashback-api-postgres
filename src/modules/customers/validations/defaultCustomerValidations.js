const {
  validateCity,
  validateCpf,
  validateName,
  validatePhone,
} = require("./validateCustomerFields");

function defaultCustomerValidations(name, cpf, city, phone) {
  if (name) validateName(name);
  if (cpf) validateCpf(cpf);
  if (city) validateCity(city);
  if (phone) validatePhone(phone);
}

module.exports = defaultCustomerValidations;
