const bcrypt = require('bcrypt')
const { randomUUID } = require('node:crypto')

const { pool } = require('../../commons/repositories/databaseUrl')

module.exports = () => ({
  create: async (data) => {
    const { name, email, password } = data

    const emailAlreadyExistsResult = await pool.query(
      'SELECT * FROM users WHERE email = ($1)',
      [email],
    )

    const emailAlreadyExists = emailAlreadyExistsResult.rows[0]

    if (emailAlreadyExists) {
      // eslint-disable-next-line no-throw-literal
      throw {
        status: 422,
        message: 'Email already exists',
      }
    }

    const _id = randomUUID()
    const salt = await bcrypt.genSalt(2)
    const passwordHash = await bcrypt.hash(password, salt)

    const createdUserResult = await pool.query(
      `INSERT INTO
        users (_id, name, email, password)
        VALUES ($1, $2, $3, $4) RETURNING *`,
      [_id, name, email, passwordHash],
    )

    return createdUserResult.rows[0]
  },

  findAll: async () => {
    const usersResult = await pool.query(
      `
      SELECT _id, name, email, created_at, updated_at
      FROM users
      WHERE deleted_at is null
      ORDER BY created_at DESC
      `,
    )
    return usersResult.rows
  },

  findOne: async (id) => {
    const userByIdResult = await pool.query(
      'SELECT * FROM users WHERE _id = ($1) AND deleted_at is null',
      [id],
    )
    return userByIdResult.rows[0]
  },

  update: () => {},

  delete: async (id) => {
    await pool.query(
      `
      UPDATE users
      SET deleted_at = ($1)
      WHERE _id = ($2)
    `,
      [new Date(), id],
    )
  },
})
