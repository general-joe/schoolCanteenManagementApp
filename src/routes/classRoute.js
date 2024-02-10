const express = require("express");

const router = express.Router();
const Class = require("../controllers/class");
const {
  classAvailability,
} = require("../validations/middlewares/classAvailability");

router.post("/addClass", classAvailability, Class.addClass);
router.get("/getClass", Class.getClass);
router.get("/id:", Class.getClassByStudentid);

module.exports = router;
