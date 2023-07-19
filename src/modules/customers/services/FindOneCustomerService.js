const { CustomerRepository } = require('../repositories')

module.exports = () => ({
  execute: async (id) => {
    return await CustomerRepository().findOne(id)
  },
})
