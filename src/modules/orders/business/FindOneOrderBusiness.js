const { FindOneOrderService } = require('../services')

module.exports = () => ({
  execute: async (id) => {
    const order = await FindOneOrderService().execute(id)

    // eslint-disable-next-line no-throw-literal
    if (!order) throw { status: 404, message: 'Order not found' }

    return order
  },
})
