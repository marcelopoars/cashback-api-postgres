const {
  FindOneCustomerService,
  UpdateCustomerService,
} = require("../../customers/services");
const { CreateOrderService } = require("../services");
const { validateOnCreateOrder } = require("../validations");
const { calculateAmountPerOrder } = require("../utils");

module.exports = () => ({
  execute: async ({ customer_id, total }) => {
    const customer = await FindOneCustomerService().execute(customer_id);

    if (!customer) throw { status: 404, message: "Customer not found" };

    validateOnCreateOrder(customer_id, total, customer.cashback);

    const total_with_discount = calculateAmountPerOrder(total, customer.cashback);

    const cashback = Number((total_with_discount * (15 / 100)).toFixed(2));

    await UpdateCustomerService().execute(customer_id, {
      ...customer,
      cashback: cashback,
    });

    return await CreateOrderService().execute({
      customer_id,
      total,
      total_with_discount,
      cashback,
    });
  },
});
