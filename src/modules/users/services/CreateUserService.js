const { UserRepository } = require("../repositories");

module.exports = () => ({
  execute: async (data) => {
    return await UserRepository().create(data);
  },
});
