import { Router } from "express";
import { createProject,deleteProject,getProject, getProjectById, updateProject } from "../controllers/projects.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";




const router = new Router();

router.get('/projects', authMiddleware, getProject);
router.post('/projects', authMiddleware, createProject);
router.put('/projects/:id', authMiddleware, updateProject);
router.delete('/projects/:id', authMiddleware, deleteProject);
router.get('/projects/:id', authMiddleware, getProjectById);

export default router;
