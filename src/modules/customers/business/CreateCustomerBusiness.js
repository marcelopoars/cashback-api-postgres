const { CreateCustomerService } = require("../services");
const { validateOnCreateCustomer } = require("../validations");
const { formatString } = require("../../commons/utils");

module.exports = () => ({
  execute: async ({ name, cpf, city, phone }) => {
    validateOnCreateCustomer(name, cpf, city, phone);

    const customer = {
      name: formatString(name),
      cpf,
      city: formatString(city),
      phone,
    };

    return await CreateCustomerService().execute(customer);
  },
});
