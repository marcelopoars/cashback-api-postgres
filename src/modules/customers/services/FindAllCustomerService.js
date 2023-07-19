const { CustomerRepository } = require('../repositories')

module.exports = () => ({
  execute: async (params) => {
    return await CustomerRepository().findAll(params)
  },
})
