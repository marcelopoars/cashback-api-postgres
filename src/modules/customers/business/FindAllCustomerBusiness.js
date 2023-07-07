const { FindAllCustomerService } = require('../services');

module.exports = () => ({
  execute: async () => {
    return await FindAllCustomerService().execute();
  },
});
