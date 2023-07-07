const { CreateAuthBusiness } = require("../business");

module.exports = () => ({
  create: async (req, res) => {
    try {
      const user = await CreateAuthBusiness().execute(req.body);

      res.status(201).json(user);
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message,
      });
    }
  },
});
