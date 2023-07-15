const { FindAllCustomerService } = require('../services');

module.exports = () => ({
  execute: async (params) => {
    return await FindAllCustomerService().execute(params);
  },
});
