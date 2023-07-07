function validateType({ value, fieldName, type = 'string' }) {
  if (typeof value !== type)
    throw {
      status: 422,
      message: `Field ${fieldName} with invalid type`,
    };
}

module.exports = validateType;
