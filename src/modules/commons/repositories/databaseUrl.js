const { Pool } = require('pg')

const postgresUrl =
  process.env.NODE_ENV === 'development'
    ? process.env.POSTGRES_LOCAL_URL
    : process.env.POSTGRES_PRODUCTION_URL

const pool = new Pool({ connectionString: postgresUrl })

module.exports = { pool }
