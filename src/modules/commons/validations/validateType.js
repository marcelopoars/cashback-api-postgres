function validateType({ value, fieldName, type = 'string' }) {
  // eslint-disable-next-line valid-typeof
  if (typeof value !== type) {
    // eslint-disable-next-line no-throw-literal
    throw {
      status: 422,
      message: `Field ${fieldName} with invalid type`,
    }
  }
}

module.exports = validateType
