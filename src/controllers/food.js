//importing prisma module
const prisma = require("../utils/prismaUtils");

//Adding a new food

const addFood = async (req, res) => {
  try {
    const data = req.body;
    const Food = await prisma.food.create({ data });
    res.status(200).json({ message: "Food created", Food });
  } catch (error) {
    console.error(error);
  }
};

///Getting all foods
const getFood = async (req, res, next) => {
  try {
    const Food = await prisma.food.findMany({});
    res.status(200).json({ message: "Foods", Food });
  } catch (error) {
    logger.error(error);
  }
};

//update food by foodId
const updateFood = async (req, res) => {
  try {
    const id = req.params;
    const data = req.body;
    const updateFood = await prisma.food.update({
      where: {
        id,
      },
      data,
    });
    res
      .status(200)
      .json({ message: "Food updated successfully", data, updateFood });
  } catch (error) {
    console.error(error);
  }
};


//delete food by foodId
const deleteFood = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleteFood = await prisma.food.delete({
      where: {
        id,
      },
    });
    res.status(200).json({ message: "Food deleted ", deleteFood });
  } catch (error) {
    logger.error(error);
  }
};
//export all the functions here
module.exports = {
  addFood,
  getFoodn,
  updateFood,
  deleteFood,
};
