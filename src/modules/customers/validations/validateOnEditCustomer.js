const defaultCustomerValidations = require("./defaultCustomerValidations");

function validateOnEditCustomer(name, cpf, city, phone) {
  if (!name && !cpf && !city && !phone)
    throw { status: 400, message: "No field was informed" };

  defaultCustomerValidations(name, cpf, city, phone);
}

module.exports = validateOnEditCustomer;
