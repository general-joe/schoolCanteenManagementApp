//importing express
const express = require("express");

//importing body parser
const bodyParser = require("body-parser");

//creating an instance of express app
//Or express initialization
const app = express();
//requiring dotenv here
require("dotenv").config();
//requiring core here
const cors = require("cors");
//creating the port number
const PORT = process.env.PORT || 9093;

//requiring adminRoute
const appRouter = require("./routes/index");

//use middlewares

app.use(bodyParser.json());
//using cors as a middleware
app.use(cors({ origin: true, credentials: true }));
//use adminRoute as a middleware
app.use("/api", appRouter);

app.get("/", (req, res) => {
  res.send("Welcome to canteen app");
});





//Defining route to delete student


 

//Defining a route for getting all payments
app.get("/getAllPayments", async (req, res) => {
  try {
    const getAllPayments = await prisma.payments.findMany();
    res.status(200).json({ getAllPayments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//Defining route to create payment
app.post("/registerPayment", async (req, res) => {
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
app.patch("/updatePayment/:id", async (req, res) => {
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
app.delete("/deletePayment/:id", async (req, res) => {
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

//Defining a route to get all students in a particular class
app.get("/class/:classId/students", async (req, res) => {
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
});

//Defining a route to get the class assigned to a specific student
app.get("/student/:studentId/class", async (req, res) => {
  const studentId = req.params.studentId;
  try {
    const studentWithClass = await prisma.students.findUnique({
      where: {
        id: studentId,
      },
      include: {
        class: true,
      },
    });
    if (!studentWithClass) {
      return res.status(404).json({ error: "class not found" });
    } else {
      res.json(studentWithClass.class);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Endpoint to get all payments made by a particular student
app.get("/student/:studentId/payments", async (req, res) => {
  const studentId = req.params.studentId;
  try {
    const studentWithPayments = await prisma.students.findUnique({
      where: { id: studentId },
      include: {
        payments: true,
      },
    });
    if (!studentWithPayments) {
      return res.status(404).json({ error: "student not found" });
    } else {
      res.json(studentWithPayments.payments);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//the app or server is listening here
app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
