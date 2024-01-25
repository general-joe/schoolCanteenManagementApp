const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Defining function to create admin
const signUpAdmin = async (req, res) => {
  const { fullName, phoneNumber, email, password } = req.body;
  try {
    const createAdmin = await prisma.admins.create({
      data: {
        fullName,
        phoneNumber,
        email,
        password,
      },
    });
    res.status(200).json({ createAdmin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Error !!!" });
  }
};

//Defining function for getting all admins
const getAllAdmins = async (req, res) => {
  try {
    const getAllAdmins = await prisma.admins.findMany();
    res.status(200).json({ getAllAdmins });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Defining function to updateAdmin by it's Id
const updateAdminById = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updateAdmin = await prisma.admins.update({
      where: {
        id,
      },
      data,
    });
    res.status(200).json({ updateAdmin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Definig function to delete admin by it's Id
const deleteAdminById = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteAdmin = await prisma.admins.delete({
      where: {
        id,
      },
    });
    res.status(200).json({ deleteAdmin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error !!1" });
  }
};
module.exports = {
  signUpAdmin,
  getAllAdmins,
  updateAdminById,
  deleteAdminById,
};
