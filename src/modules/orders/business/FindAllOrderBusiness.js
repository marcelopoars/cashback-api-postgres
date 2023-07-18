const { FindAllOrderService } = require('../services')

module.exports = () => ({
  execute: async () => {
    return await FindAllOrderService().execute()
  },
})
