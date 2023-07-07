const { Pool } = require("pg");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const postgresUrl =
  process.env.NODE_ENV === "development"
    ? process.env.POSTGRES_DEV_URL
    : process.env.POSTGRES_PROD_URL;

const pool = new Pool({ connectionString: postgresUrl });

class AuthRepository {
  async create(data) {
    const { email, password } = data;

    const userExistsResult = await pool.query(
      "SELECT * FROM users WHERE email = ($1)",
      [email]
    );

    const user = userExistsResult.rows[0];

    if (!user)
      throw {
        status: 404,
        message: "User not found",
      };

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword)
      throw {
        status: 422,
        message: "Invalid email or password",
      };

    const secret = process.env.SECRET;
    const token = jwt.sign(
      {
        id: user._id,
      },
      secret
    );

    return { message: "Authorized", token };
  }
}

module.exports = AuthRepository;
