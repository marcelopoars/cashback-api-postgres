const { CustomerRepository } = require("../repositories");

module.exports = () => ({
  execute: async () => {
    return await CustomerRepository().findAll();
  },
});
