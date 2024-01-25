const express = require("express");
const router = express.Router();
const { createTask, getAllTask } = require("../controllers/task_controller");

//Router
router.post("/api/tasks", createTask);
router.get("/api/tasks", getAllTask);

module.exports = router;
