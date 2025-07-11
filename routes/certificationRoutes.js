import express from 'express';
import { createCertification, getCertifications, deleteCertification } from '../controllers/certificationController.js';

const router = express.Router();

router.post('/', createCertification);
router.get('/', getCertifications);
router.delete('/:id', deleteCertification);

export default router;
