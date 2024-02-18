const express = require("express");
const router = express.Router();
const Class = require("../controllers/class");
const classAvailability = require("../validations/middlewares/classAvailability");

//Defining all routes for the various crud operations for the class model
router.post("/addClass", classAvailability.classAvailablity, Class.addClass);
router.get("/getClass", Class.getClass);
router.get("/:id", Class.getClassByStudentid);
router.delete("/:id", Class.deleteClass);
router.patch("/:id", Class.updateClass);

//exporting our router her
module.exports = router;
