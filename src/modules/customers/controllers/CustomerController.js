const {
  CreateCustomerBusiness,
  FindAllCustomerBusiness,
  FindOneCustomerBusiness,
  UpdateCustomerBusiness,
  DeleteCustomerBusiness,
} = require("../business");

module.exports = () => ({
  create: async (req, res) => {
    try {
      const customer = await CreateCustomerBusiness().execute(req.body);
      res.status(201).json(customer);
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message,
      });
    }
  },

  findAll: async (_, res) => {
    try {
      const customers = await FindAllCustomerBusiness().execute();
      res.status(200).json(customers);
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message,
      });
    }
  },

  findOne: async (req, res) => {
    try {
      const { id } = req.params;
      const customer = await FindOneCustomerBusiness().execute(id);
      res.status(200).json(customer);
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message,
      });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const editedCustomer = await UpdateCustomerBusiness().execute(id, req.body);
      res.status(200).json(editedCustomer);
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message,
      });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedCustomer = await DeleteCustomerBusiness().execute(id);
      res.status(200).json(deletedCustomer);
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message,
      });
    }
  },
});
