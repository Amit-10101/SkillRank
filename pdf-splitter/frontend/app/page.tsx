import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Home = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
			<h1 className="text-4xl font-bold mb-8">PDF Splitter/Merger</h1>
			<div className="space-x-4">
				<Link href="/split">
					<Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						Split PDF
					</Button>
				</Link>
				<Link href="/merge">
					<Button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
						Merge PDFs
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Home;
