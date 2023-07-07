const { FindOneOrderService } = require("../services");

module.exports = () => ({
  execute: async (id) => {
    const order = await FindOneOrderService().execute(id);

    if (!order) throw { status: 404, message: "Order not found" };

    return order;
  },
});
