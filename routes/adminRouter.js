const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

//Defining route to create an admin
router.post("/api/v1/registerAdmin", adminController.signUpAdmin);
