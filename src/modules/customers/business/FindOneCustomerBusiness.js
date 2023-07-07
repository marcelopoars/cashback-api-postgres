const { FindOneCustomerService } = require("../services");

module.exports = () => ({
  execute: async (id) => {
    const customer = await FindOneCustomerService().execute(id);

    if (!customer) throw { status: 404, message: "Customer not found" };

    return customer;
  },
});
