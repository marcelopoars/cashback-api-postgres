const { UserRepository } = require("../repositories");

module.exports = () => ({
  execute: async (id) => {
    return await UserRepository().delete(id);
  },
});
