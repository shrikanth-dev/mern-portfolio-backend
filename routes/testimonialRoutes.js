import express from 'express';
import { createTestimonial, getTestimonials, deleteTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();

router.post('/', createTestimonial);
router.get('/', getTestimonials);
router.delete('/:id', deleteTestimonial);

export default router;
