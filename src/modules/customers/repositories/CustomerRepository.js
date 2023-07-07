const { Pool } = require("pg");

const { randomUUID } = require("node:crypto");

// const postgresUrl =
//   process.env.NODE_ENV === "development"
//     ? process.env.POSTGRES_DEV_URL
//     : process.env.POSTGRES_PROD_URL;

const pool = new Pool({ connectionString: process.env.POSTGRES_NEON_URL });

module.exports = () => ({
  create: async (data) => {
    const { name, cpf, city, phone } = data;

    const _id = randomUUID();

    const createdCustomerResult = await pool.query(
      `INSERT INTO
        customers (_id, name, cpf, city, phone)
        VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [_id, name, cpf, city, phone]
    );

    return createdCustomerResult.rows[0];
  },

  findAll: async () => {
    const customersResult = await pool.query(
      "SELECT * FROM customers WHERE deleted_at is null ORDER BY created_at DESC"
    );
    return customersResult.rows;
  },

  findOne: async (id) => {
    const customerByIdResult = await pool.query(
      "SELECT * FROM customers WHERE _id = ($1) AND deleted_at is null",
      [id]
    );
    return customerByIdResult.rows[0];
  },

  update: async (id, data) => {
    const { name, cpf, city, phone, cashback } = data;

    const updatedAt = new Date();

    const updatedCustomerResult = await pool.query(
      `
      UPDATE customers
      SET name = ($2), cpf = ($3), city = ($4), phone = ($5), updated_at = ($6), cashback = ($7)
      WHERE _id = ($1) RETURNING *
      `,
      [id, name, cpf, city, phone, updatedAt, cashback]
    );
    return updatedCustomerResult.rows[0];
  },

  delete: async (id) => {
    await pool.query(
      `
      UPDATE customers
      SET deleted_at = ($1)
      WHERE _id = ($2)
    `,
      [new Date(), id]
    );
  },
});
