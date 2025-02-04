import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import pdfRoutes from './routes/pdf.routes';

const app = express();

app.use(express.json());
app.use(
	cors({
		origin: 'http://localhost:3000',
		credentials: true,
	})
);

app.use('/api/v1/pdf', pdfRoutes);

const PORT = process.env.PORT || 8080;

app.get('*/test', (req, res) => {
	res.status(200).send({ message: 'Server is running...' });
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
