const defaultCustomerValidations = require('./defaultCustomerValidations')

function validateOnEditCustomer(name, cpf, city, phone) {
  if (!name && !cpf && !city && !phone) {
    // eslint-disable-next-line no-throw-literal
    throw { status: 400, message: 'No field was informed' }
  }

  defaultCustomerValidations(name, cpf, city, phone)
}

module.exports = validateOnEditCustomer
