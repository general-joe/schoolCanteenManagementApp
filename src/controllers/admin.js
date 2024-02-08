const prisma = require('../utils/prismaUtils')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Defining function to create admin
const signUpAdmin = async (req, res) => {
  const { fullName, phoneNumber, email, password } = req.body;
  try {
    //implementing logic to check whether the admins details already exist in the database
    const existingAdmin = await prisma.admins.findFirst({
      where: { email: email },
    });
    if (existingAdmin) {
      res.status(409).json({ message: "Admin has already registered" });
    }
    //implementing logic to hash the password before storing it into the database
    const passwordHashed = await bcrypt.hash(password, 10);
    if (passwordHashed) {
      //implementing logic to create admin
      const createNewAdmin = await prisma.admins.create({
        data: {
          fullName,
          phoneNumber,
          email,
          password:passwordHashed
        },
      });
      res.status(200).json({
        message: "You have successfully sign up to this page",
        admin: createNewAdmin,
        password,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error !!!" });
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

//admin authentication endpoint(admin's login logic)
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admins = await prisma.admins.findFirst({
      where: { email },
    });

    if (!admins) {
      res.status(404).json({ message: "Admins not found", admins });
    }
    const bcryptCheck = await bcrypt.compare(admins.password, password);
    if (bcryptCheck) {
      res
        .status(401)
        .json({ message: "Invalide credentials" });
    } else {
      const token = jwt.sign({ userId: admins.id }, process.env.SECRET_KEY);
      const {password,...admin}= admins
      res.json({ token, admin });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = {
  signUpAdmin,
  getAllAdmins,
  updateAdminById,
  deleteAdminById,
  loginAdmin,
};
