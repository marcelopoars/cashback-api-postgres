const {
  FindOneCustomerService,
  UpdateCustomerService,
} = require('../../customers/services')
const { CreateOrderService } = require('../services')
const { validateOnCreateOrder } = require('../validations')
const { calculateAmountPerOrder } = require('../utils')

module.exports = () => ({
  execute: async ({ customerId, total }) => {
    const customer = await FindOneCustomerService().execute(customerId)

    // eslint-disable-next-line no-throw-literal
    if (!customer) throw { status: 404, message: 'Customer not found' }

    validateOnCreateOrder(customerId, total, customer.cashback)

    const totalWithDiscount = calculateAmountPerOrder(total, customer.cashback)

    const cashback = Number((totalWithDiscount * (15 / 100)).toFixed(2))

    await UpdateCustomerService().execute(customerId, {
      ...customer,
      cashback,
    })

    return await CreateOrderService().execute({
      customerId,
      total,
      totalWithDiscount,
      cashback,
    })
  },
})
