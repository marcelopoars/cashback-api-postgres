const databaseUrl = {
  localhost: process.env.POSTGRES_LOCAL_URL,
  neon: process.env.POSTGRES_NEON_URL,
  elephant: process.env.POSTGRES_ELEPHANT_URL,
};

module.exports = { databaseUrl };
