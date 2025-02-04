import { Request, Response } from 'express';
import { answerQuestion } from '../services/qa.service';
import path from 'path';

export const uploadDocument = async (req: Request, res: Response): Promise<void> => {
	try {
		if (!req.file) {
			res.status(400).send('No file uploaded');
			return;
		}

		res.status(200).json({ filename: req.file.filename });
	} catch (error) {
		res.status(500).send('Error processing file');
	}
};

export const getAnswer = async (req: Request, res: Response): Promise<void> => {
	try {
		const { filename, question } = req.body;

		if (!filename || !question) {
			res.status(400).send('Filename and question are required');
			return;
		}

		const filePath = path.join(__dirname, '../../uploads', filename);
		const answer = await answerQuestion(filePath, question);

		res.status(200).json({ answer });
	} catch (error) {
		res.status(500).send('Error getting answer');
	}
};
