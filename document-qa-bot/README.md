# Document Question Answer Bot

This project is a Document Question Answer Bot that allows users to upload documents and ask questions about the content of the uploaded documents. The bot processes the document and provides answers based on the content.

## Table of Contents

-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [Getting Started](#getting-started)
-   [Backend Setup](#backend-setup)
-   [Frontend Setup](#frontend-setup)
-   [Usage](#usage)
-   [Contributing](#contributing)
-   [License](#license)

## Features

-   Upload documents
-   Ask questions about the uploaded documents
-   Get answers based on the document content

## Tech Stack

-   **Frontend**: Next.js, React, Tailwind CSS, Shadcn components
-   **Backend**: Node.js, Express, Multer, Google Generative AI

## Getting Started

### Prerequisites

-   Node.js (v14 or higher)
-   npm or yarn

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/Amit-10101/SkillRank.git
    cd SkillRank/document-question-answer-bot
    ```

2. Install dependencies for both frontend and backend:

    ```sh
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

## Backend Setup

1. Create a `.env` file in the [backend](http://_vscodecontentref_/1) directory and add your environment variables:

    ```env
    PORT=5000
    GOOGLE_API_KEY=your_google_api_key
    ```

2. Start the backend server:

    ```sh
    npm run dev
    ```

## Frontend Setup

1. Create a `.env` file in the [frontend](http://_vscodecontentref_/2) directory and add your environment variables:

    ```env
    NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
    ```

2. Start the frontend development server:

    ```sh
    npm run dev
    ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. Upload a document using the upload form.
2. Once the document is uploaded, you will receive a filename.
3. Use the filename to ask questions about the document content.
4. The bot will provide answers based on the document content.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
