const { OrderRepository } = require("../repositories");

module.exports = () => ({
  execute: async () => {
    return await OrderRepository().findAll();
  },
});
