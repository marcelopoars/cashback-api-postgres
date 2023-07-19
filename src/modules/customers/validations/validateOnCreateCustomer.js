const defaultCustomerValidations = require('./defaultCustomerValidations')

function validateOnCreateCustomer(name, cpf, city, phone) {
  if (!name || !cpf || !city || !phone) {
    const error = { status: 422, message: 'All fields are required' }

    throw error
  }

  defaultCustomerValidations(name, cpf, city, phone)
}

module.exports = validateOnCreateCustomer
