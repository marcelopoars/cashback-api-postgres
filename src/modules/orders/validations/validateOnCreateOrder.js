const { validateType } = require("../../commons/validations");

function validateOnCreateOrder(customer_id, total, cashback) {
  if (!customer_id || (!total && total !== 0))
    throw {
      status: 422,
      message: "All fields are required",
    };

  if (total <= 0)
    throw {
      status: 422,
      message: "Total must be greater than zero",
    };

  if (cashback > total)
    throw {
      status: 422,
      message: "Total must be greater than cashback",
      cashback: cashback,
    };

  validateType({ value: customer_id, fieldName: "customer_id" });
  validateType({ value: total, fieldName: "total", type: "number" });
}

module.exports = validateOnCreateOrder;
