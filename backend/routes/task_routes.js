const express = require("express");
const router = express.Router();
const {
  createTask,
  getAllTask,
  getTaskById,
  deleteTask,
  updateTask,
} = require("../controllers/task_controller");

//Router
router.post("/api/tasks", createTask);
router.get("/api/tasks", getAllTask);
router.get("/api/getTaskById/:id", getTaskById);
router.delete("/api/deleteTaskById/:id", deleteTask);
router.put("/api/updateTask/:id",updateTask);

module.exports = router;
