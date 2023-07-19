/* eslint-disable no-throw-literal */
const { validateType } = require('../../commons/validations')

function validateOnCreateOrder(customerId, total, cashback) {
  if (!customerId || (!total && total !== 0))
    throw {
      status: 422,
      message: 'All fields are required',
    }

  if (total <= 0)
    throw {
      status: 422,
      message: 'Total must be greater than zero',
    }

  if (cashback > total)
    throw {
      status: 422,
      message: 'Total must be greater than cashback',
      cashback,
    }

  validateType({ value: customerId, fieldName: 'customerId' })
  validateType({ value: total, fieldName: 'total', type: 'number' })
}

module.exports = validateOnCreateOrder
