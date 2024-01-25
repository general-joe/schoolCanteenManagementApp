const { Router } = require("express");
const appRouter = Router();

//import all the routes here

const adminRoute = require("./adminRouter");
const classRoute = require("./classRouter");

//all middlewares here
appRouter.use("/admin", adminRoute);
appRouter.use("/class", classRoute);

module.exports = appRouter;
