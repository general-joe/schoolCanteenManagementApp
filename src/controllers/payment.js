const prisma = require('../utils/prismaUtils')
const moment = require("moment");

//Defining function to make/register/signUp Payment model
const makePayment = async (req, res) => {
  
  try {
    const { Date, ...rest} = req.body;
    if(amountPaid === 10.0){
      const createPayment = await prisma.payment.create({
        data: {
          Date: moment(Date).format(),
          amountPaid: amountPaid,
          isPaid: true,
          totalAmountCollected: amountPaid,
          ...rest
        },

      });

      res.status(200).json({ message: "payment made successfully", createPayment });
      
    }else{
      res.status(200).json({ message: "Not Paid"});

    }
   
  } catch (error) {
    console.error(error);
  }
};

//Defining function to get all payments
const getAllPayments = async (req, res) => {
  try {
    const getAllPayments = await prisma.payment.findMany();
    res.status(200).json({ getAllPayments });
  } catch (error) {
    console.error(error);
  }
};

//Defining function to update payment by it's Id
const updatePaymentById = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatePayment = await prisma.payment.update({
      where: {
        id,
      },
      data,
    });
    res.status(200).json({ updatePayment });
  } catch (error) {
    console.error(error);

  }
};

//Defining function to delete payment by it's Id
const deletePaymentById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletePayment = await prisma.payment.delete({
      where: {
        id,
      },
    });
    res.status(200).json({ deletePayment });
  } catch (error) {
    console.error(error);
   
  }
};

//Defining function to get all payments made by a particular student
const getPaymentBystudentId = async (req, res) => {
  const {studentid} = req.body
  try {
    const student = await prisma.student.findUnique({
      where: { indexNumber: studentid },

    });
    if(student){
      const payment = await prisma.payment.findMany({
        where: {studentid}
      })
      res.status(200).json({message:"payment for student with student id "+ studentid, payment});
    }
    else{
      res.status(404).json({message:"No payment found with student id "+ studentid});
    }
  } catch (error) {
    console.error(error);
    
  }
};

//Defining function to get all payment by inputing date for day transaction
const getPaymentByDate = async (req, res) => {
  try {
    const {date} = req.body
    const getPaymentByDate = await prisma.payment.findMany({
      where: {
       date
      }
    });
    if(!date){
      res.status(404).json({message:"No payment date found for ", date});
    }else{
      res.status(200).json({ message: "payment for ", getPaymentByDate });
    }
    
  } catch (error) {
    console.error(error);
   
  }
};

module.exports = {
  makePayment,
  getAllPayments,
  updatePaymentById,
  deletePaymentById,
  getPaymentBystudentId,
  getPaymentByDate
};
