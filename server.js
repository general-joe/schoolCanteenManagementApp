//importing express
const express = require("express");

//importing body parser
const bodyParser = require("body-parser");

//creating an instance of express app
//Or express initialization
const app = express();
//requiring dotenv here
require("dotenv").config();
//requiring core here
const cors = require("cors");
//requiring moment here
const moment = require("moment");
//creating the port number
const PORT = process.env.PORT || 9093;

//requiring adminRoute
const appRouter = require("./routes/index");

//use middlewares

app.use(bodyParser.json());
//using cors as a middleware
app.use(cors({ origin: true, credentials: true }));
//use adminRoute as a middleware
app.use("/api", appRouter);

app.get("/", (req, res) => {
  res.send("Welcome to canteen app");
});

//the app or server is listening here
app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
