'use client';

import React, { useState } from 'react';

import axiosInstance from '@/utils/axiosInstance';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Split = () => {
	const [file, setFile] = useState<File | null>(null);
	const [pages, setPages] = useState<string>('');

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFile(e.target.files[0]);
		}
	};

	const handleSplit = async () => {
		if (file && pages) {
			const formData = new FormData();
			formData.append('file', file);
			formData.append('pages', pages);

			try {
				const response = await axiosInstance.post('/pdf/split', formData, {
					responseType: 'blob',
				});
				const url = window.URL.createObjectURL(new Blob([response.data]));
				const link = document.createElement('a');
				link.href = url;
				link.setAttribute('download', 'split.pdf');
				document.body.appendChild(link);
				link.click();
			} catch (error) {
				console.error('Error splitting PDF:', error);
			}
		}
	};
	const handleTest = async () => {
		console.log(import.meta);
		try {
			// const response = await axiosInstance.get(process.env.NEXT_PUBLIC_API_BASE_URL + '/test');
			const response = await axiosInstance.get('/test');

			console.log(response.data);
		} catch (error) {
			console.error('Error splitting PDF:', error);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
			<h1 className="text-4xl font-bold mb-8">Split PDF</h1>
			<Input type="file" onChange={handleFileChange} className="mb-4" />
			<Input
				type="text"
				placeholder="Enter pages (e.g., 1,2,3)"
				value={pages}
				onChange={(e) => setPages(e.target.value)}
				className="mb-4"
			/>
			<Button
				onClick={handleSplit}
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>
				Split PDF
			</Button>
			<Button
				onClick={handleTest}
				className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
			>
				TEST
			</Button>
		</div>
	);
};

export default Split;
