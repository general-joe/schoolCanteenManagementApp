const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const moment = require("moment");

//Defining function to make/register/signUp Payment model
const makePayment = async (req, res) => {
  const { date, ...rest } = req.body;
  try {
    const createPayment = await prisma.payments.create({
      data: {
        date: moment().format(),
        ...rest,
      },
    });
    res.status(200).json({ createPayment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Error !!!" });
  }
};

//Defining function to get all payments
const getAllPayments = async (req, res) => {
  try {
    const getAllPayments = await prisma.payments.findMany();
    res.status(200).json({ getAllPayments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Defining function to update payment by it's Id
const updatePaymentById = async (req, res) => {
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
};

//Defining function to delete payment by it's Id
const deletePaymentById = async (req, res) => {
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
};

//Defining function to get all payments made by a particular student
const getAllPaymentsMadeByParticularStudent = async (req, res) => {
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
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Defining function to get all payment by inputing date for day transaction
const getAllPaymentsByDate = async (req, res) => {
  try {
    const date = moment(req.params.date);
    const getAllPaymentDay = await prisma.payments.findMany({
      where: {
        //filtering system to find records in a day
        createdAt: {
          //greater than the start of the day
          gte: date.startOf("day").toDate(),
          ///lesser than the end of the day
          lt: date.endOf("day").toDate(),
        },
      },
    });
    res.status(200).json({ getAllPaymentDay });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  makePayment,
  getAllPayments,
  updatePaymentById,
  deletePaymentById,
  getAllPaymentsMadeByParticularStudent,
  getAllPaymentsByDate,
};
