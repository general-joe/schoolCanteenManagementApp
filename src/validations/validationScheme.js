const { check } = require("express-validator");
const validator = require("validator");

exports.adminsValidationRules = [
  check("email")
  
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email is not valid"),

  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),

  check("phoneNumber")
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

exports.studentValidation = [
  check("indexNumber")
  .isLength({max:10, min:10})
  .withMessage("Provide a valid index Number"),
]
