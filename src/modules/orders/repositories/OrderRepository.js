const { randomUUID } = require("node:crypto");

const { pool } = require("../../commons/repositories/databaseUrl");

module.exports = () => ({
  create: async (data) => {
    const { customer_id, total, total_with_discount, cashback } = data;

    const _id = randomUUID();

    const createCustomerResult = await pool.query(
      `INSERT INTO
        orders (_id, customer_id, total, total_with_discount, cashback)
        VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [_id, customer_id, total, total_with_discount, cashback]
    );

    return createCustomerResult.rows[0];
  },

  findAll: async () => {
    const findAllOrdersResult = await pool.query(
      `
      SELECT
      orders._id,
      orders.customer_id,
      orders.total,
      orders.total_with_discount,
      orders.cashback,
      orders.created_at,
      orders.updated_at,

      customers.name,
      customers.cpf,
      customers.city,
      customers.phone

      FROM orders
      INNER JOIN customers
      ON orders.customer_id = customers._id
      WHERE orders.deleted_at is null
      ORDER BY created_at DESC
    `
    );

    const orders = findAllOrdersResult.rows.map(
      ({
        _id,
        total,
        total_with_discount,
        cashback,
        created_at,
        updated_at,
        customer_id,
        name,
        cpf,
        city,
        phone,
      }) => {
        const user = { _id: customer_id, name, cpf, city, phone };

        return {
          _id,
          total,
          total_with_discount,
          cashback,
          user,
          created_at,
          updated_at,
        };
      }
    );

    return orders;
  },

  findOne: async (id) => {
    const findOrderResult = await pool.query(
      `
      SELECT
      orders._id,
      orders.customer_id,
      orders.total,
      orders.total_with_discount,
      orders.cashback,
      orders.created_at,
      orders.updated_at,

      customers.name,
      customers.cpf,
      customers.city,
      customers.phone

      FROM orders
      INNER JOIN customers
      ON orders.customer_id = customers._id
      WHERE orders._id = ($1) AND orders.deleted_at is null
    `,
      [id]
    );

    const {
      _id,
      total,
      total_with_discount,
      cashback,
      created_at,
      updated_at,
      customer_id,
      name,
      cpf,
      city,
      phone,
    } = findOrderResult.rows[0];

    const user = { _id: customer_id, name, cpf, city, phone };

    return {
      _id,
      total,
      total_with_discount,
      cashback,
      user,
      created_at,
      updated_at,
    };
  },

  update: async (id, data) => {},

  delete: async (id) => {
    await pool.query(
      `
        UPDATE orders
        SET deleted_at = ($1)
        WHERE _id = ($2)
      `,
      [new Date(), id]
    );
  },
});
