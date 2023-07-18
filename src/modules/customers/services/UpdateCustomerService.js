const { CustomerRepository } = require('../repositories')

module.exports = () => ({
  execute: async (id, data) => {
    return await CustomerRepository().update(id, data)
  },
})
