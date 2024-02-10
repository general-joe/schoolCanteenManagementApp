const express = require("express");
const router = express.Router();
const payment = require("../controllers/payment")

//Defining all routes for crud operations for payment model
router.post("/pay", payment.makePayment);
router.get("/paymentreceipts", payment.getAllPayments);
router.patch("/updatePayment/:id", payment.updatePaymentById);
router.delete("/deletePayment/:id", payment.deletePaymentById);
router.get(
  "/studentid:",
  payment.getPaymentBystudentId
);
router.get("/date", payment.getPaymentByDate);

module.exports = router;
