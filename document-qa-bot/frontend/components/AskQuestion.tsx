'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import axiosInstance from '@/utils/axiosInstance';
import { Input } from './ui/input';
import { Button } from './ui/button';
import Loader from './Loader';

interface AskQuestionProps {
	filename: string;
}

interface Chat {
	question: string;
	answer: string;
}

const AskQuestion: React.FC<AskQuestionProps> = ({ filename }) => {
	const [question, setQuestion] = useState('');
	const [chat, setChat] = useState<Chat[]>([]);
	const [loading, setLoading] = useState(false);

	const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuestion(e.target.value);
	};

	const handleAsk = async () => {
		setLoading(true);
		try {
			const response = await axiosInstance.post('/qa/ask', { filename, question });
			setChat([...chat, { question, answer: response.data.answer }]);
			setQuestion('');
		} catch (error) {
			console.error('Error getting answer:', error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex flex-col w-full h-full">
			<div className="flex-1 overflow-y-scroll p-4 w-full">
				{chat.map((entry, index) => (
					<div key={index} className="mb-4 w-full flex flex-col gap-4">
						<div className="bg-blue-100 max-w-3xl py-3 px-5 rounded-lg self-end">
							{entry.question}
						</div>
						<div className="bg-gray-100 max-w-3xl py-3 px-5 rounded-lg self-start">
							{entry.answer}
						</div>
					</div>
				))}

				{loading && (
					<div className="flex justify-center items-center h-16">
						<Loader />
					</div>
				)}
			</div>

			<div className="p-4 pt-6 border-t w-full flex gap-4">
				<Input
					type="text"
					value={question}
					onChange={handleQuestionChange}
					placeholder="Ask a question"
					className="w-full mb-2 grow p-6"
				/>
				<Button
					onClick={handleAsk}
					disabled={!filename}
					className="py-6 px-8 flex items-center"
				>
					Ask <FontAwesomeIcon icon={faPaperPlane} />
				</Button>
			</div>
		</div>
	);
};

export default AskQuestion;
