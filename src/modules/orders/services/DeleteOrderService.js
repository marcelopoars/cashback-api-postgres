const { OrderRepository } = require("../repositories");

module.exports = () => ({
  execute: async (id) => {
    return await OrderRepository().delete(id);
  },
});
