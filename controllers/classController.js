const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//Defining function to register class
const registerClass = async (req, res) => {
  const { className, classTeacherName } = req.body;
  try {
    const createClass = await prisma.class.create({
      data: {
        className,
        classTeacherName,
      },
    });
    res.status(200).json({ createClass });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Error !!!" });
  }
};

//Defining function to update a single class by Id
const updateClassById = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updateClass = await prisma.class.update({
      where: {
        id,
      },
      data,
    });
    res.status(200).json({ updateClass });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Defining function to get all registere class
const getAllClass = async (req, res) => {
  try {
    const getAllClass = await prisma.class.findMany();
    res.status(200).json({ getAllClass });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = {
  registerClass,
  updateClassById,
  getAllClass,
};
