import { Router } from 'express';
import multer from 'multer';
import { splitPDFHandler, mergePDFsHandler } from '../controllers/pdf.controller';

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/split', upload.single('file'), splitPDFHandler);
router.post('/merge', upload.array('files'), mergePDFsHandler);

export default router;
