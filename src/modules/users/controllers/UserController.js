const {
  CreateUserBusiness,
  FindAllUserBusiness,
  FindOneUserBusiness,
} = require("../business");

module.exports = () => ({
  create: async (req, res) => {
    try {
      const user = await CreateUserBusiness().execute(req.body);

      res.status(201).json(user);
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message,
      });
    }
  },

  findAll: async (_, res) => {
    try {
      const users = await FindAllUserBusiness().execute();
      res.status(200).json(users);
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message,
      });
    }
  },

  findOne: async (req, res) => {
    try {
      const { id } = req.params;

      const user = await FindOneUserBusiness().execute(id);

      res.status(200).json(user);
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message,
      });
    }
  },

  update: (req, res) => {},

  delete: (req, res) => {},
});
