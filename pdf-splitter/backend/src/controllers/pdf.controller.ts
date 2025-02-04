import { Request, Response } from 'express';
import { splitPDF, mergePDFs } from '../services/pdf.service';

const splitPDFHandler = async (req: Request, res: Response) => {
	try {
		const { pages } = req.body;
		const file = req.file as Express.Multer.File;

		if (!file || !pages) {
			res.status(400).send('File and pages are required');
			return;
		}

		const outputFilePath = await splitPDF(file, pages);
		res.download(outputFilePath);
	} catch (error) {
		if (error instanceof Error) {
			res.status(500).send(error.message);
		} else {
			res.status(500).send('An unknown error occurred');
		}
	}
};

const mergePDFsHandler = async (req: Request, res: Response) => {
	try {
		const files = req.files as Express.Multer.File[];

		if (!files || files.length === 0) {
			res.status(400).send('Files are required');
			return;
		}

		const outputFilePath = await mergePDFs(files);
		res.download(outputFilePath);
	} catch (error) {
		if (error instanceof Error) {
			res.status(500).send(error.message);
		} else {
			res.status(500).send('An unknown error occurred');
		}
	}
};

export { splitPDFHandler, mergePDFsHandler };
