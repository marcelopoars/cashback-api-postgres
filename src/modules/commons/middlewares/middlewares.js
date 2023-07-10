const jwt = require("jsonwebtoken");

//  Version 4 UUID / RFC 4122
const uuidPattern =
  /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

const validateId = (req, res, next) => {
  const { id } = req.params;

  const isValidId = uuidPattern.test(id);

  if (!isValidId) return res.status(422).json({ message: "Invalid id" });

  next();
};

const validateToken = (req, res, next) => {
  const authorizationHeader = req.headers["authorization"];

  const token = authorizationHeader && authorizationHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Unauthorized access" });

  try {
    const secret = process.env.SECRET;
    jwt.verify(token, secret);
  } catch (error) {
    return res.status(400).json({ message: "Invalid token" });
  }

  next();
};

module.exports = { validateId, validateToken };
