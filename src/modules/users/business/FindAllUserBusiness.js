const { FindAllUserService } = require('../services')

module.exports = () => ({
  execute: async () => {
    return await FindAllUserService().execute()
  },
})
