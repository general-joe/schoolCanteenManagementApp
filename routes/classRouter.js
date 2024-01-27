const express = require("express");
const router = express.Router();
const classController = require("../controllers/classController");

//Defining all routes for the various crud operations for the class model
router.post("/registerClass", classController.registerClass);
router.get("/getAllClass", classController.getAllClass);
router.patch("/updateClass/:id", classController.updateClassById);
router.delete("/deleteClass/:id", classController.deleteClassById);

module.exports = router;
