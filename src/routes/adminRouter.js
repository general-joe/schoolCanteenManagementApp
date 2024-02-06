const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const validationError = require("../utilities/validationError");
const validationScheme = require("../utilities/validationScheme");
const valid = [...validationScheme, validationError.validateRequestSchema];

//Defining all routes for the various crud operations for the admin model
router.post("/registerAdmin", valid, adminController.signUpAdmin);
router.get("/getAllAdmins", adminController.getAllAdmins);
router.patch("/updateAdmin/:id", adminController.updateAdminById);
router.delete("/deleteAdmin/:id", adminController.deleteAdminById);
router.post("/login", adminController.loginAdmin);

module.exports = router;
