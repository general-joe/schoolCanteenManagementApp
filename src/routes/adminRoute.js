const express = require("express");
const router = express.Router();
const admin = require("../controllers/admin");
const validationError = require("../utils/validationError");
const validationScheme = require("../validations/validationScheme");
const valid = [validationScheme.adminsValidationRules, validationError.validateRequestSchema];
const {adminAvailablity} = require("../validations/middlewares/adminAvailability")

//Defining all routes for the various crud operations for the admin model
router.post("/register", valid, adminAvailablity, admin.signUpAdmin);
router.get("/list", admin.getAdmins);
router.patch("/:id", admin.updateAdmin);
router.delete("/:id", admin.deleteAdmin);
router.post("/login", admin.loginAdmin);

module.exports = router;
