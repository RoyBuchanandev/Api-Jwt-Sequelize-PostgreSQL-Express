import { Router } from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getTask,
} from "../controllers/task.controller.js";

const router = Router();

// Routes
router.post("/tasks", createTask);
router.put("/tasks:id", updateTask);
router.delete("/tasks:id", deleteTask);
router.get("/tasks", getTasks);
router.get("/tasks:id", getTask);

export default router;