//requiring prisma module, moment module, and logger module here
const prisma = require("../utils/prismaUtils");
const moment = require("moment");
const logger = require("../utils/logger");
///marking attendance
const markAttendance = async (req, res) => {
  try {
    const { Date, ...rest } = req.body;
    const attendance = await prisma.attendance.create({
      data: {
        Date: moment(Date).format(),
        ...rest,
      },
    });
    console.log(attendance);
    if (!attendance) {
    } else {
      res.status(200).json({ message: "Attendance marked", attendance });
    }
  } catch (error) {
    res.status(200).json({
      message: "please provide a valid input either: present or absent",
    });
    logger.error(error);
  }
};

///geting all the attendance records
const getAllattendance = async (req, res) => {
  try {
    const attendance = await prisma.attendance.findMany({});
    res.status(200).json({ message: "All Attendance Records", attendance });
  } catch (error) {
    res.status(400).json({});
    logger.error(error);
  }
};

///getting attendance of a student with their id
const getAttendanceById = async (req, res) => {
  try {
    const { studentId } = req.params;
    const attendance = await prisma.attendance.findMany({
      where: { studentid: studentId },
    });

    res.status(200).json({ message: "Attendance for ", studentId, attendance });
  } catch (error) {
    logger.error(error);
  }
};

///getting attendance based on a particular date and time
const getAttendanceByDate = async (req, res) => {
  try {
    const { Date } = req.body;

    const attendance = await prisma.attendance.findMany({
      where: {
        Date,
      },
    });
    res.status(200).json({ message: "Attendance for ", Date, attendance });
  } catch (error) {
    logger.error(error);
  }
};

//function to delete attendance
const updateAttendance = async (req, res) => {
  const id = req.params;
  const data = req.body;
  const attendance = await prisma.attendance.update({
    where: {
      studentid: id,
    },

    data,
  });
  res.status(200).json({ message: "updated", attendance });
};

///exporting all our function names here
module.exports = {
  markAttendance,
  getAllattendance,
  getAttendanceById,
  getAttendanceByDate,
  updateAttendance,
};
