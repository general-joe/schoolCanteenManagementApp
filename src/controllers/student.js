//requiring prisma module, logger module and moment module here
const prisma = require("../utils/prismaUtils");
const logger = require("../utils/logger");
const moment = require("moment");

///registering or adding a new student
const addStudent = async (req, res, next) => {
  try {
    const { dob, ...rest } = req.body;

    const student = await prisma.student.create({
      data: {
        dob: moment(dob).format(),
        ...rest,
      },
    });
    res
      .status(200)
      .json({ message: "student registered successfully", student });
  } catch (error) {
    logger.error(error);
  }
};

///getting the list of all the student available

const getStudent = async (req, res) => {
  try {
    const student = await prisma.student.findMany({});
    res.status(200).json({ message: "Registered Student", student });
  } catch (error) {
    logger.error(error);
  }
};

///getting a particular student
const getStudentById = async (req, res) => {
  try {
    const { studentid } = req.body;
    const student = await prisma.student.findMany({
      where: { studentid },
    });
    res.status(200).json({ message: student });
  } catch (error) {
    logger.error(error);
  }
};

///deleting a student

const deleteStudent = async (req, res) => {
  try {
    const studentid = req.body;
    const student = await prisma.student.delete({
      where: {
        studentid,
      },
    });
    res.status(200).json({ message: "student removed", student });
  } catch (error) {
    logger.error(error);
  }
};

///updating a student
const updateStudent = async (req, res) => {
  try {
    const { studentid } = req.params;
    const data = req.body;
    const student = await prisma.student.update({
      where: {
        studentid,
      },
    });
    res.status(200).json({ message: "student updated", data, student });
  } catch (error) {
    logger.error(error);
  }
};

///exporting all our function's names here

module.exports = {
  addStudent,
  getStudent,
  getStudentById,
  deleteStudent,
  updateStudent,
};
