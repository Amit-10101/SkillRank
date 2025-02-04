'use client';

import React, { useRef } from 'react';
import axiosInstance from '@/utils/axiosInstance';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

interface UploadDocumentProps {
	filename: string;
	setFilename: (filename: string) => void;
}

const UploadDocument: React.FC<UploadDocumentProps> = ({ filename, setFilename }) => {
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const file = e.target.files[0];
			const formData = new FormData();
			formData.append('file', file);

			try {
				const response = await axiosInstance.post('/qa/upload', formData);
				setFilename(response.data.filename);
			} catch (error) {
				console.error('Error uploading file:', error);
			}
		}
	};

	const handleButtonClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	return (
		<div className="w-full flex flex-col items-end gap-4 mb-6">
			<Input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />

			<Button onClick={handleButtonClick} className="w-fit px-8 py-6">
				<FontAwesomeIcon icon={faFile} />{' '}
				<p className="font-medium text-[0.95rem]">{filename ? 'Change' : 'Upload'}</p>
			</Button>
		</div>
	);
};

export default UploadDocument;
