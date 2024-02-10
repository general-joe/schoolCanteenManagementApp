const express = require('express')

const router = express.Router()
const Class = require("../controllers/class")

router.post ('/addClass', Class.addClass)
router.get('/getClass', Class.getClass)
router.get('/id:', Class.getClassByStudentid)

module.exports = router;
