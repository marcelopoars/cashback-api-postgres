const { AuthRepository } = require('../repositories')

const authRepository = new AuthRepository()

module.exports = () => ({
  execute: (data) => {
    return authRepository.create(data)
  },
})
