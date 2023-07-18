const { UserRepository } = require('../repositories')

module.exports = () => ({
  execute: async (id) => {
    return await UserRepository().findOne(id)
  },
})
