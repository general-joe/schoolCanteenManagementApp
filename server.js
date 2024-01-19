//importing express
const express = require("express");
//importing prisma client
const { PrismaClient } = require("@prisma/client");
//importing body parser
const bodyParser = require("body-parser");
//creating an instance of prisma client
const prisma = new PrismaClient();
//creating an instance of express app
//Or express initialization
const app = express();
//creating the port number
const PORT = process.env.PORT || 9090;

//use middlewares

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to shool canteen management app");
});



//the app or server is listening here
app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
