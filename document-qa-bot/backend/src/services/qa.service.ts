import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';

if (!process.env.GOOGLE_API_KEY) {
	throw new Error('Gemini Api Key is requried');
}

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export const answerQuestion = async (filePath: string, question: string): Promise<string> => {
	const fileBuffer = fs.readFileSync(filePath);
	const model = genAI.getGenerativeModel({ model: 'models/gemini-1.5-flash' });

	const result = await model.generateContent([
		{
			inlineData: {
				data: fileBuffer.toString('base64'),
				mimeType: 'application/pdf',
			},
		},
		question,
	]);

	return result.response.text();
};
