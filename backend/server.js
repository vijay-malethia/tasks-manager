const dotenv = require("dotenv").config(); //Using config we can initiate dotenv file
const express = require("express"); //Import express
const mongoose = require("mongoose"); //Import mongoose

//Initiate Express
const app = express();

//--------------------------------------------------Routes-------------------------
//Routes ("/",inital route)
app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

//About page
app.get("/about", (req, res) => {
  res.send("Welcome to About Page");
});

//-------------------------------------------------Connection---------------------

const PORT = process.env.PORT || 5000; //Change port on basis of production and development

//Using this you can connect db then start the server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {f
      console.log("Server Connected");
    });
  })
  .catch((error) => console.log(error));
