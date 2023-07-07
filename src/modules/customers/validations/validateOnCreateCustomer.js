const defaultCustomerValidations = require("./defaultCustomerValidations");

function validateOnCreateCustomer(name, cpf, city, phone) {
  if (!name || !cpf || !city || !phone)
    throw {
      status: 422,
      message: "All fields are required",
    };

  defaultCustomerValidations(name, cpf, city, phone);
}

module.exports = validateOnCreateCustomer;
