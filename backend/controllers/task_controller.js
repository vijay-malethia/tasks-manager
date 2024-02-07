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

//Get a task with id
const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json(`No task found with id:${id}`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//Delete a task by id
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json(`No task found with id= ${id}`);
    }
    res.status(200).json("Successfully deleted");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//Update a task

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(
      {
        _id: id,
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!task) {
      res.status(404).json(`No task found with id=${id}`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createTask,
  getAllTask,
  getTaskById,
  deleteTask,
  updateTask,
};
