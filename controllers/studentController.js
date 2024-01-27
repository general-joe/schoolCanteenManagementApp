const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//Defining function to register a stuent
const signUpStuent = async (req, res) => {
  const {
    studentFullName,
    dob,
    age,
    gender,
    index,
    parentFullName,
    parentContact,
  } = req.body;
  try {
    const createStudet = await prisma.students.create({
      data: {
        studentFullName,
        dob,
        age,
        gender,
        index,
        parentFullName,
        parentContact,
      },
    });
    res.status(200).json({ createStudet });
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

module.exports = {
  signUpStuent,
  getAllStudents,
  updatStudentById,
  deleteStudentById,
};
