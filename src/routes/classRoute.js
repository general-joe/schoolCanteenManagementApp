const express = require('express')

const router = express.Router()
const Class = require("../controllers/class")
const {classAvailablity}= require('../validations/middlewares/classAvailability')

router.post ('/addClass', classAvailablity, Class.addClass)
router.get('/getClass', Class.getClass)
router.get('/:id', Class.getClassByStudentid)
router.delete('/:id', Class.deleteClass)

module.exports = router;
