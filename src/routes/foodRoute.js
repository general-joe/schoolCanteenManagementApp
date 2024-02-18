const express = require("express");
const router = express.Router();
const Food = require("../controllers/food");

//Defining all routes for the various crud operations for the food model
router.post("/addFood", Food.addFood);
router.get("/getFoods", Food.getFoods);
router.patch("/:id", Food.updateFood);
router.delete("/:id", Food.deleteFood);
router.get("/:id", Food.getFoodById);

//exporting our router here
module.exports = router;
