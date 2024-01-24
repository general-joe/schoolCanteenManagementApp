const { Router } = require("express");
const appRouter = Router();

//import all the routes here

const adminRoute = require("./adminRouter");

//middleware
appRouter.use("/admin", adminRoute);

module.exports = appRouter;
