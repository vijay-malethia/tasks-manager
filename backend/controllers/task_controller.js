const Task = require("../models/task_model");

//Create a Task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//Get all task
const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createTask,
  getAllTask,
};
