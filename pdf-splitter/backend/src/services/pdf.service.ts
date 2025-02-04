import fs from 'fs';
import path from 'path';
import { PDFDocument } from 'pdf-lib';

const splitPDF = async (file: Express.Multer.File, pages: string): Promise<string> => {
	const fileName = Date.now() + '_' + file.originalname.split(' ').join('_');
	const filePath = path.join(__dirname, '../../temp', fileName);
	fs.writeFileSync(filePath, file.buffer);

	const existingPdfBytes = fs.readFileSync(filePath);
	const pdfDoc = await PDFDocument.load(existingPdfBytes);
	const newPdfDoc = await PDFDocument.create();

	const pageNumbers = pages.split(',').map(Number);
	for (const pageNumber of pageNumbers) {
		const [copiedPage] = await newPdfDoc.copyPages(pdfDoc, [pageNumber - 1]);
		newPdfDoc.addPage(copiedPage);
	}

	const newPdfBytes = await newPdfDoc.save();
	const outputFilePath = path.join(__dirname, '../../temp', `split_${fileName}`);
	fs.writeFileSync(outputFilePath, newPdfBytes);

	return outputFilePath;
};

const mergePDFs = async (files: Express.Multer.File[]): Promise<string> => {
	const newPdfDoc = await PDFDocument.create();

	for (const file of files) {
		const fileName = Date.now() + '_' + file.originalname.split(' ').join('_');
		const filePath = path.join(__dirname, '../../temp', fileName);
		fs.writeFileSync(filePath, file.buffer);

		const existingPdfBytes = fs.readFileSync(filePath);
		const pdfDoc = await PDFDocument.load(existingPdfBytes);

		const copiedPages = await newPdfDoc.copyPages(pdfDoc, pdfDoc.getPageIndices());
		copiedPages.forEach((page) => newPdfDoc.addPage(page));
	}

	const newPdfBytes = await newPdfDoc.save();
	const outputFilePath = path.join(__dirname, '../../temp', `merged_${Date.now()}.pdf`);
	fs.writeFileSync(outputFilePath, newPdfBytes);

	return outputFilePath;
};

export { splitPDF, mergePDFs };
