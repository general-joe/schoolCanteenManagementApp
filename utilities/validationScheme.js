const { check } = require("express-validator");
const validator = require("validator");

const adminsValidationRules = [
  check("email")
    .exists()
    .withMessage("Email is required")
    .notEmpty()
    .withMessage("Email is required")
    .trim()
    .withMessage("Email should not have leading or trailing spaces")
    .isEmail()
    .withMessage("Email is not valid")
    .normalizeEmail(),

  check("password")
    .exists()
    .withMessage("Password is required")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters")
    .matches(/[A-Z]/g)
    .withMessage("Password must contain an upper case letter")
    .matches(/[a-z]/g)
    .withMessage("Password must contain an lower case letter")
    .matches(/[0-9]/g)
    .withMessage("Password must contain a number")
    .not()
    .matches(/\s/g)
    .withMessage("Password should not contain spaces"),
  check("phoneNumber")
    .exists()
    .withMessage("Phone number is required")
    .notEmpty()
    .withMessage("Phone number is required")
    .isMobilePhone()
    .withMessage("Phone number is invalid")
    .custom((value, { req }) => {
      if (!validator.isMobilePhone(value, "en-GH")) {
        throw new Error("Phone number is not associated with Ghana");
      } else {
        return true;
      }
    }),
];

module.exports = adminsValidationRules;
