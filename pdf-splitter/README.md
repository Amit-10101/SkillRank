# PDF Splitter/Merger

This project is a PDF Splitter/Merger that allows users to upload PDF files and either split them into individual pages or merge multiple PDF files into one. The application provides an easy-to-use interface for these operations.

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

-   Upload PDF files
-   Split PDF files into individual pages
-   Merge multiple PDF files into one

## Tech Stack

-   **Frontend**: Next.js, React, Tailwind CSS, Shadcn components
-   **Backend**: Node.js, Express, Multer, pdf-lib

## Getting Started

### Prerequisites

-   Node.js (v14 or higher)
-   npm or yarn

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/Amit-10101/pdf-splitter-merger.git
    cd pdf-splitter-merger
    ```

2. Install dependencies for both frontend and backend:

    ```sh
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

## Backend Setup

1. Create a `.env` file in the backend directory and add your environment variables:

    ```env
    PORT=5000
    ```

2. Start the backend server:

    ```sh
    npm run dev
    ```

## Frontend Setup

1. Create a `.env` file in the frontend directory and add your environment variables:

    ```env
    NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
    ```

2. Start the frontend development server:

    ```sh
    npm run dev
    ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. Navigate to the home page.
2. Choose either the "Split PDF" or "Merge PDFs" option.
3. Follow the instructions to upload your PDF files and perform the desired operation.

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
