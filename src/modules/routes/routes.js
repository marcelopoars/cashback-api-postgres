const Router = require("express");

const routes = Router();

const {
  validateId,
  validateToken,
} = require("../commons/middlewares/middlewares");

const { CustomerController } = require("../customers/controllers");
const { OrderController } = require("../orders/controllers");
const { UserController } = require("../users/controllers");
const { AuthController } = require("../auth/controllers");

const customerController = CustomerController();
const orderController = OrderController();
const userController = UserController();
const authController = AuthController();

// Customer
routes.post("/customers", validateToken, customerController.create);
routes.get("/customers", customerController.findAll);
routes.get("/customers/:id", customerController.findOne);
routes.put("/customers/:id", validateToken, validateId, customerController.update);
routes.delete("/customers/:id", validateToken, validateId, customerController.delete);

// Order
routes.post("/orders", validateToken, orderController.create);
routes.get("/orders", orderController.findAll);
routes.get("/orders/:id", orderController.findOne);
routes.put("/orders/:id", validateToken, orderController.update);
routes.delete("/orders/:id", validateToken, validateId, orderController.delete);

// User
routes.post("/users/register", userController.create);
routes.get("/users", userController.findAll);
routes.get("/users/:id", validateId, userController.findOne);

// Auth
routes.post("/login", authController.create);

module.exports = routes;
