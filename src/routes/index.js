const express = require('express');
const route = express.Router();

//import all the routes here
const adminRoute = require('./adminRoute')
const classRoute = require('./classRoute')
const studentRoute = require('./studentRoute')
const paymentRoute = require('./paymentRoute')
const attendanceRoute = require('./attendanceRoute')

//Using it as a  middlewares here
route.use("/admin", adminRoute);
route.use("/class", classRoute);
route.use("/student", studentRoute);
route.use("/payment", paymentRoute);
route.use("/attendance",attendanceRoute);

module.exports = route;
