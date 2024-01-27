const { Router } = require("express");
const appRouter = Router();

//import all the routes here

const adminRoute = require("./adminRouter");
const classRoute = require("./classRouter");
const studentRoute = require("./studentRouter");

//Using it as a  middlewares here
appRouter.use("/admin", adminRoute);
appRouter.use("/class", classRoute);
appRouter.use("/student", studentRoute);

module.exports = appRouter;
