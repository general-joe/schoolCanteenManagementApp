const { validationResult } = require("express-validator");
exports.validateRequestSchema = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors?.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }
  next();
};
