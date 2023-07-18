const { FindOneCustomerService, DeleteCustomerService } = require('../services')

module.exports = () => ({
  execute: async (id) => {
    const customer = await FindOneCustomerService().execute(id)

    const error = { status: 404, message: 'Customer not found' }

    if (!customer) throw error

    return await DeleteCustomerService().execute(id)
  },
})
