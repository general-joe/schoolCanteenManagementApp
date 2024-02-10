const { Router } = require('express');

const route = Router();
const studentRoute = require('../routes/studentRoute')
const attendanceRoute = require('../routes/attendanceRoute')
const classRoute = require('../routes/classRoute')
const paymentRoute = require('../routes/paymentRoute')

route.use('/student',studentRoute)
route.use('/attendance', attendanceRoute)
route.use('/class', classRoute)
route.use('/payment', paymentRoute)

module.exports = route;