const express = require("express");
const router = express.Router();
const attendance = require("../controllers/attendance");
const {
  checkindexAvailablity,
} = require("../validations/middlewares/attendanceCheck");

//Defining all routes for the various crud operations for the attendance model
router.post(
  "/markAttendance",
  checkindexAvailablity,
  attendance.markAttendance
);
router.get("/getAttendance", attendance.getAllattendance);
router.get("/:studentId", attendance.getAttendanceById);
router.get("/date", attendance.getAttendanceByDate);
router.patch("/update/:id", attendance.updateAttendance);

//exporting our router here
module.exports = router;
