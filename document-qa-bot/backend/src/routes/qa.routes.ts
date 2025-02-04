import { Router } from 'express';
import { uploadDocument, getAnswer } from '../controllers/qa.controller';
import upload from '../middlewares/upload.middleware';

const router = Router();

router.post('/upload', upload, uploadDocument);
router.post('/ask', getAnswer);

export default router;
