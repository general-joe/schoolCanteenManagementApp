const express = require('express');
const router = express.Router();
const Student = require('../controllers/student')
const {studentAvailablity} = require('../validations/middlewares/studentAvailability')
const validationError = require("../utils/validationError");
const validationScheme = require("../validations/validationScheme");
const valid = [validationScheme.studentValidation, validationError.validateRequestSchema];



router.post('/register', valid, studentAvailablity, Student.addStudent)// a post request to add a student
router.get('/list', Student.getStudent) // a get request to retrieve a list of all student 
router.get('/:id', Student.getStudentById) // a get request to retrieve a particular student
router.delete('/:id', Student.deleteStudent) // a delete request to remove a student 
router.patch('/:id', Student.updateStudent) // a patch request to update records of a student


///exporting or router 
module.exports = router;