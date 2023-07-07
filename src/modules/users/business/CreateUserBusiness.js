const { CreateUserService } = require("../services");
const { validateOnCreateUser } = require("../validations");
const { formatString } = require("../../commons/utils");

module.exports = () => ({
  execute: async ({ name, email, password, confirm_password }) => {
    validateOnCreateUser({ name, email, password, confirm_password });

    const user = {
      name: formatString(name),
      email,
      password,
    };

    return await CreateUserService().execute(user);
  },
});
