const { Router } = require("express");
const route = Router();

//import all the routes here

const adminRoute = require("./adminRouter");
const classRoute = require("./classRouter");
const studentRoute = require("./studentRouter");
const paymentRoute = require("./paymentRouter");
const attendanceRoute = require("./attendanceRoute")

//Using it as a  middlewares here
route.use("/admin", adminRoute);
route.use("/class", classRoute);
route.use("/student", studentRoute);
route.use("/payment", paymentRoute);
route.use("/attendance",attendanceRoute);

module.exports = route;
