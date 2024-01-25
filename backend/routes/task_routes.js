const express = require("express");
const router = express.Router();
const {
  createTask,
  getAllTask,
  getTaskById,
} = require("../controllers/task_controller");

//Router
router.post("/api/tasks", createTask);
router.get("/api/tasks", getAllTask);
router.get("/api/getTaskById/:id", getTaskById);

module.exports = router;
