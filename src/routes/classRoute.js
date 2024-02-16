
const router = express.Router();
const Class = require("../controllers/class");
const {
  classAvailability,
} = require("../validations/middlewares/classAvailability");

router.post("/addClass", classAvailability, Class.addClass);
router.get("/getClass", Class.getClass);
router.get("/:id", Class.getClassByStudentid);
router.delete("/:id", Class.deleteClassById);


module.exports = router;
