const express = require('express');
const router = express.Router();
const attendance = require('../controllers/attendance');
const {checkindexAvailablity} = require("../validation/middlewares/attendanceCheck")




router.post('/markAttendance',  checkindexAvailablity,attendance.markAttendance)
router.get('/getAttendance', attendance.getAllattendance)
router.get('/:studentId', attendance.getAttendanceById)
router.get('/date',  attendance.getAttendanceByDate)
router.patch('/update/:id', attendance.updateAttendance)





module.exports = router;