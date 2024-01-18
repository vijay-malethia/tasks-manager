const express = require("express"); //Import express

//Initial Express
const app = express();

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/about", (req, res) => {
  res.send("Welcome to About Page");
});

//Change port on basis of production and development
const PORT = process.env.PORT || 5000;

//Create server
app.listen(PORT, () => {
  console.log("hello world, server running on port &{PORT}");
});
