const dotenv = require("dotenv").config(); //Using config we can initiate dotenv file
const express = require("express"); //Import express
const mongoose = require("mongoose"); //Import mongoose
const Task = require("./models/task_model"); //Import model
const taskRoutes = require("./routes/task_routes");

//Initiate Express
const app = express();

//-------------------------------------------------Middleware-------------------------
app.use(express.json()); //To access json data through request
app.use(taskRoutes);

//--------------------------------------------------Routes---------------------------

//Routes ("/",inital route)
app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

//About page
app.get("/about", (req, res) => {
  res.send("Welcome to About Page");
});

//-----------------------------------------------Connection---------------------

const PORT = process.env.PORT || 5000; //Change port on basis of production and development

//Using this you can connect db then start the server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`DB Connected & server runing on port:${PORT}`);
    });
  })
  .catch((error) => console.log(error));
