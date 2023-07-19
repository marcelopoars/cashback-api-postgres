/* eslint-disable no-throw-literal */
function validateOnCreateUser({ name, email, password, confirmPassword }) {
  if (!name || !email || !password || !confirmPassword) {
    throw {
      status: 422,
      message: 'All fields are required',
    }
  }

  if (password !== confirmPassword) {
    throw {
      status: 422,
      message: 'Passwords do not match',
    }
  }
}

module.exports = validateOnCreateUser
