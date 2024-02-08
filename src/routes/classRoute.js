const express = require("express");
const router = express.Router();
const Class = require("../controllers/class")

//Defining all routes for the various crud operations for the class model
router.post("/registerClass", Class.registerClass);
router.get("/getAllClass", Class.getAllClass);
router.patch("/updateClass/:id", Class.updateClassById);
router.delete("/deleteClass/:id", Class.deleteClassById);
router.get(
  "/:studentId/class",
  Class.getClassForSpecificStudentByStudentId
);

module.exports = router;
