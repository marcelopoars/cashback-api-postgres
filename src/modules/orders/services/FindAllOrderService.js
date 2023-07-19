const { OrderRepository } = require('../repositories')

module.exports = () => ({
  execute: async (params) => {
    return await OrderRepository().findAll(params)
  },
})
