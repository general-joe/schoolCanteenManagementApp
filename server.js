//importing express
const express = require("express");
//importing prisma client
const { PrismaClient } = require("@prisma/client");
//importing body parser
const bodyParser = require("body-parser");
//creating an instance of prisma client
const prisma = new PrismaClient();
//creating an instance of express app
//Or express initialization
const app = express();
//requiring dotenv here
require("dotenv").config();
//creating the port number
const PORT = process.env.PORT || 9093;

//use middlewares

app.use(bodyParser.json());

//Defining a route for getting all admins
app.get("/", async (req, res) => {
  try {
    const getAllAdmins = await prisma.admins.findMany();
    res.status(200).json({ getAllAdmins });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
//Defining route to create an admin
app.post("/api/v1/registerAdmin", async (req, res) => {
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
});

//Defining route to update a single admin
app.patch("/api/v1/updateAdmin/:id", async (req, res) => {
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
});

//Defining route to delete an admin
app.delete("/api/v1/deleteAdmin/:id", async (req, res) => {
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
});

//Defining a route for getting all class
app.get("/api/v1/getAllClass", async (req, res) => {
  try {
    const getAllClass = await prisma.class.findMany();
    res.status(200).json({ getAllClass });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//Defining route to create a class
app.post("/api/v1/registerClass", async (req, res) => {
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
});

//Defining route to update a single class
app.patch("/api/v1/updateClass/:id", async (req, res) => {
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
});

//Defining route to delete class
app.delete("/api/v1/deleteClass/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteClass = await prisma.class.delete({
      where: {
        id,
      },
    });
    res.status(200).json({ deleteClass });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error !!1" });
  }
});

//Defining a route for getting all students
app.get("/api/v1/getAllStudents", async (req, res) => {
  try {
    const getAllStudents = await prisma.students.findMany();
    res.status(200).json({ getAllStudents });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//Defining route to create a student
app.post("/api/v1/registerStudent", async (req, res) => {
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
});

//Defining route to update a single student
app.patch("/api/v1/updateStudent/:id", async (req, res) => {
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
});

//Defining route to delete student
app.delete("/api/v1/deleteStudent/:id", async (req, res) => {
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
});

//Defining a route for getting all students
app.get("/api/v1/getAllStudents", async (req, res) => {
  try {
    const getAllStudents = await prisma.students.findMany();
    res.status(200).json({ getAllStudents });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//Defining a route for getting all payments
app.get("/api/v1/getAllPayments", async (req, res) => {
  try {
    const getAllPayments = await prisma.payments.findMany();
    res.status(200).json({ getAllPayments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//Defining route to create payment
app.post("/api/v1/registerPayment", async (req, res) => {
  const { description, date, amountPaid } = req.body;
  try {
    const createPayment = await prisma.payments.create({
      data: {
        description,
        date,
        amountPaid,
      },
    });
    res.status(200).json({ createPayment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Error !!!" });
  }
});

//Defining route to update a single payment
app.patch("/api/v1/updatePayment/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatePayment = await prisma.payments.update({
      where: {
        id,
      },
      data,
    });
    res.status(200).json({ updatePayment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//Defining route to delete payment
app.delete("/api/v1/deletePayment/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletePayment = await prisma.payments.delete({
      where: {
        id,
      },
    });
    res.status(200).json({ deletePayment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error !!1" });
  }
});

//the app or server is listening here
app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
