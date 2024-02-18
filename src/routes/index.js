const { Router } = require("express");
const route = Router();
const studentRoute = require("../routes/studentRoute");
const attendanceRoute = require("../routes/attendanceRoute");
const classRoute = require("../routes/classRoute");
const paymentRoute = require("../routes/paymentRoute");
const adminRoute = require("../routes/adminRoute");
const foodRoute = require("../routes/foodRoute");

//our middlewears here
route.use("/student", studentRoute);
route.use("/attendance", attendanceRoute);
route.use("/class", classRoute);
route.use("/payment", paymentRoute);
route.use("/admin", adminRoute);
route.use("/food", foodRoute);

//exporting our route here
module.exports = route;
