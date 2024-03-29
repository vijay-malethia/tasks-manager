const mongoose = require("mongoose");

//Create schema to structure our data
const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      requrired: [true, "Please enter task name"],
    },
    completed: {
      type: Boolean,
      requrired: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
