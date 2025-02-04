'use client';

import React, { useState } from 'react';
import axiosInstance from '@/utils/axiosInstance';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Merge = () => {
	const [files, setFiles] = useState<FileList | null>(null);
	const [pdfUrl, setPdfUrl] = useState<string | null>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFiles(e.target.files);
		}
	};

	const handleMerge = async () => {
		if (files) {
			const formData = new FormData();
			Array.from(files).forEach((file) => {
				formData.append('files', file);
			});

			try {
				const response = await axiosInstance.post('/pdf/merge', formData, {
					responseType: 'blob',
				});
				const url = window.URL.createObjectURL(new Blob([response.data]));
				setPdfUrl(url);
			} catch (error) {
				console.error('Error merging PDFs:', error);
			}
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
			<h1 className="text-4xl font-bold mb-8">Merge PDFs</h1>
			<Input type="file" multiple onChange={handleFileChange} className="mb-4" />
			<Button
				onClick={handleMerge}
				className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
			>
				Merge PDFs
			</Button>
			{pdfUrl && (
				<div className="mt-8">
					<h2 className="text-2xl font-bold mb-4">Merged PDF</h2>
					<iframe
						src={pdfUrl}
						width="600"
						height="800"
						className="border-2 border-gray-300"
					></iframe>
				</div>
			)}
		</div>
	);
};

export default Merge;
