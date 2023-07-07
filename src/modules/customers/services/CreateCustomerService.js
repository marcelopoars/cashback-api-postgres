const { CustomerRepository } = require("../repositories");

module.exports = () => ({
  execute: async (data) => {
    return await CustomerRepository().create(data);
  },
});
