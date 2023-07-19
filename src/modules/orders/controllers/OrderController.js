const {
  CreateOrderBusiness,
  FindAllOrderBusiness,
  FindOneOrderBusiness,
  DeleteOrderBusiness,
} = require('../business')

module.exports = () => ({
  create: async (req, res) => {
    try {
      const order = await CreateOrderBusiness().execute(req.body)
      res.status(201).json(order)
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message,
      })
    }
  },

  findAll: async (req, res) => {
    try {
      const params = req.query
      const orders = await FindAllOrderBusiness().execute(params)
      res.status(200).json(orders)
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message,
      })
    }
  },

  findOne: async (req, res) => {
    try {
      const { id } = req.params
      const order = await FindOneOrderBusiness().execute(id)
      res.status(200).json(order)
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message,
      })
    }
  },

  update: (req, res) => {
    try {
      const { id } = req.params
      res.status(200).json({ updatedOrder: id })
    } catch (error) {}
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params
      const deletedOrder = await DeleteOrderBusiness().execute(id)
      res.status(200).json(deletedOrder)
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message,
      })
    }
  },
})
