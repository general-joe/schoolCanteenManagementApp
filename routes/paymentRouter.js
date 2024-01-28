const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

//Defining all routes for crud operations for payment model
router.post("/registerPayment", paymentController.makePayment);
router.get("/getAllPayments", paymentController.getAllPayments);
router.patch("/updatePayment/:id", paymentController.updatePaymentById);
router.delete("/deletePayment/:id", paymentController.deletePaymentById);
router.get(
  "/:studentId/payments",
  paymentController.getAllPaymentsMadeByParticularStudent
);

module.exports = router;
