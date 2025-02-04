'use client';

import React, { useState } from 'react';
import UploadDocument from '@/components/UploadDocument';
import AskQuestion from '@/components/AskQuestion';

const Home = () => {
	const [filename, setFilename] = useState('');

	return (
		<div className="flex flex-col items-center gap-8 p-8 w-full h-full">
			<h1 className="text-4xl font-bold mt-4 mb-8">Document Question Answer Bot</h1>

			<UploadDocument filename={filename} setFilename={setFilename} />
			<AskQuestion filename={filename} />
		</div>
	);
};

export default Home;
