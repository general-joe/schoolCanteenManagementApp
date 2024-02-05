const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const moment = require("moment");

//Defining function to register a stuent
const signUpStuent = async (req, res) => {
  const { dob, ...rest } = req.body;

  try {
    //  //implementing logic to check whether the student's details already exist in the database
    const existingStudent = await prisma.students.findFirst({
      where: { index: rest.index },
    });
    if (existingStudent) {
      res.status(409).json({ message: "Student has already registered" });
    } else {
      //implementing logic to create student
      const createStudet = await prisma.students.create({
        data: {
          dob: moment(dob).format(),
          ...rest,
        },
        include: {
          Class: true,
        },
      });
      res.status(200).json({ createStudet });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Error !!!" });
  }
};

//Defining function to get all registered students
const getAllStudents = async (req, res) => {
  try {
    const getAllStudents = await prisma.students.findMany();
    res.status(200).json({ getAllStudents });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Defining function to update a student by Id
const updatStudentById = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updateStudent = await prisma.students.update({
      where: {
        id,
      },
      data,
    });
    res.status(200).json({ updateStudent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Defining function to delete a student by Id
const deleteStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteStudent = await prisma.students.delete({
      where: {
        id,
      },
    });
    res.status(200).json({ deleteStudent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error !!1" });
  }
};

//Defining function to get all students in a particular class by selecting the classId
const getAllStudentByClassId = async (req, res) => {
  const classId = req.params.classId;
  try {
    const classWithStudents = await prisma.class.findUnique({
      where: {
        id: classId,
      },
      include: {
        students: true,
      },
    });
    if (!classWithStudents) {
      return res.status(404).json({ error: "class not found" });
    } else {
      res.json(classWithStudents.students);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  signUpStuent,
  getAllStudents,
  updatStudentById,
  deleteStudentById,
  getAllStudentByClassId,
};
