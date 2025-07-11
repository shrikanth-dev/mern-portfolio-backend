import express from 'express';
const router = express.Router();
import {
  getProjects,
  addProject,
  updateProject,
  deleteProject
} from '../controllers/projectController.js';

// Public
router.get('/', getProjects);

// Protected 
router.post('/', addProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

export default router;

