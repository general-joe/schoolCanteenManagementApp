const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

//Defining all routes for the various crud operations for the admin model
router.post("/registerAdmin", adminController.signUpAdmin);
router.get("/getAllAdmins", adminController.getAllAdmins);
router.patch("/updateAdmin/:id", adminController.updateAdminById);
router.delete("/deleteAdmin/:id", adminController.deleteAdminById);
router.post("/login", adminController.loginAdmin);

module.exports = router;
