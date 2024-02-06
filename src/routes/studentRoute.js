const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

//Defining all routes for crud operations for student model
router.post("/registerStudent", studentController.signUpStuent);
router.get("/getAllStudents", studentController.getAllStudents);
router.patch("/updateStudent/:id", studentController.updatStudentById);
router.delete("/deleteStudent/:id", studentController.deleteStudentById);
router.get("/:classId/students", studentController.getAllStudentByClassId);

module.exports = router;
