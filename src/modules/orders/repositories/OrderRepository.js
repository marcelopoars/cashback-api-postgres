const { randomUUID } = require('node:crypto')

const { pool } = require('../../commons/repositories/databaseUrl')

module.exports = () => ({
  create: async (data) => {
    const { customerId, total, totalWithDiscount, cashback } = data

    const _id = randomUUID()

    const createCustomerResult = await pool.query(
      `INSERT INTO
        orders (_id, customer_id, total, total_with_discount, cashback)
        VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [_id, customerId, total, totalWithDiscount, cashback],
    )

    return createCustomerResult.rows[0]
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
    `,
    )

    const orders = findAllOrdersResult.rows.map(
      ({
        _id,
        total,
        total_with_discount: totalWithDiscount,
        cashback,
        created_at: createdAt,
        updated_at: updatedAt,
        customer_id: customerId,
        name,
        cpf,
        city,
        phone,
      }) => {
        return {
          _id,
          total,
          totalWithDiscount,
          cashback,
          customer: { _id: customerId, name, cpf, city, phone },
          createdAt,
          updatedAt,
        }
      },
    )

    return orders
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
      [id],
    )

    const order = findOrderResult.rows.map(
      ({
        _id,
        total,
        total_with_discount: totalWithDiscount,
        cashback,
        created_at: createdAt,
        updated_at: updatedAt,
        customer_id: customerId,
        name,
        cpf,
        city,
        phone,
      }) => {
        return {
          _id,
          total,
          totalWithDiscount,
          cashback,
          customer: { _id: customerId, name, cpf, city, phone },
          createdAt,
          updatedAt,
        }
      },
    )

    return order[0]
  },

  update: async () => {},

  delete: async (id) => {
    await pool.query(
      `
        UPDATE orders
        SET deleted_at = ($1)
        WHERE _id = ($2)
      `,
      [new Date(), id],
    )
  },
})
