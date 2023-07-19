const { FindAllOrderService } = require('../services')

module.exports = () => ({
  execute: async (params) => {
    return await FindAllOrderService().execute(params)
  },
})
