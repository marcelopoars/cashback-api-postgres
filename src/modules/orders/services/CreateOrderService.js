const { OrderRepository } = require('../repositories')

module.exports = () => ({
  execute: async (data) => {
    return await OrderRepository().create(data)
  },
})
