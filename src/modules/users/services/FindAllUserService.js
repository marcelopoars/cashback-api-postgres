const { UserRepository } = require('../repositories')

module.exports = () => ({
  execute: async () => {
    return await UserRepository().findAll()
  },
})
