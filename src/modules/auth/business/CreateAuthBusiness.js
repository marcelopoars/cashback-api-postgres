const { CreateAuthService } = require("../services");

module.exports = () => ({
  execute: ({ email, password }) => {
    if (!email || !password)
      throw {
        status: 422,
        message: "All fields are required",
      };

    const user = {
      email,
      password,
    };

    return CreateAuthService().execute(user);
  },
});
