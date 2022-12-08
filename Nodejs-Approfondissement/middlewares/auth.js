const UnauthorizedError = require("../errors/unauthorized");
const jwt = require("jsonwebtoken");
const config = require("../config");

module.exports = (req, res, next) => {
  try {
    console.log("POPO")

    const token = req.headers["x-access-token"];
    if (token === null) {
      console.log(token)

      throw "not token";
    }
    const decoded = jwt.verify(token, config.secretJwtToken);
    console.log(decoded)
    req.user = decoded;
    next();
  } catch (message) {
    console.log("POPO")

    next(new UnauthorizedError(message));
  }
};
