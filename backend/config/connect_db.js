const mongoose = require("mongoose"); //Import mongoose

//This function used to connect to database
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    process.exit(1); //exit connection if error occuures
  }
};
module.exports = connectDB; //export DB connection

/////Use this function in server.js file to connect to server and database/////////////////////////////

// const connectDB = require("./config/connectDB"); //Import db connection file    (also import it)

//Create Server
// const createServer = async () => {
//     try {
//       app.listen(PORT, () => {
//         console.log("Server Connected");
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   //Call connetDB and createServer
//   const startServer = async () => {
//     try {
//       await connectDB();
//       createServer();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   //Start Server
//   startServer();
