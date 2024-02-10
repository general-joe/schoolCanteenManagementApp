const express = require("express");
const router = express.Router();
const admin = require("../controllers/admin");
const validationError = require("../utils/validationError");
const validationScheme = require("../validation/validationScheme");
const valid = [...validationScheme, validationError.validateRequestSchema];

//Defining all routes for the various crud operations for the admin model
router.post("/register", valid, admin.signUpAdmin);
router.get("/list", admin.getAllAdmins);
router.patch("/:id", admin.updateAdminById);
router.delete("/:id", admin.deleteAdminById);
router.post("/login", admin.loginAdmin);

module.exports = router;
