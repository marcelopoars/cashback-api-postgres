function validateOnCreateUser({ name, email, password, confirm_password }) {
  if (!name || !email || !password || !confirm_password)
    throw {
      status: 422,
      message: "All fields are required",
    };

  if (password !== confirm_password)
    throw {
      status: 422,
      message: "Passwords do not match",
    };
}

module.exports = validateOnCreateUser;
