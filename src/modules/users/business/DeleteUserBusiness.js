const { FindOneUserService, DeleteUserService } = require('../services')

module.exports = () => ({
  execute: async (id) => {
    const user = await FindOneUserService().execute(id)

    // eslint-disable-next-line no-throw-literal
    if (!user) throw { status: 404, message: 'User not found' }

    return await DeleteUserService().execute(id)
  },
})
