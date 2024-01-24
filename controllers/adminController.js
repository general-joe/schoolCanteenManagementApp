const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Endpoint or logic to create admin
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

module.exports = {
  signUpAdmin,
};
