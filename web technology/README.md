# Resume Builder Application

This project is a web application that allows users to fill out forms and generate resumes in PDF format. The application is built using Express.js and handles user sessions, form submissions, and data storage.

## Features

- User session management with `express-session`
- Form submission and data storage in JSON format
- PDF generation from user data using `pdf-lib`
- Static file serving for front-end HTML files

## Prerequisites

- Node.js (v14 or later)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/resume-builder.git
    ```
2. Navigate to the project directory:
    ```sh
    cd resume-builder
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

- `public/`: Contains static files (HTML, CSS, JavaScript).
- `data/`: Directory for storing user data in JSON format.
- `server.js`: Main server file.

## API Endpoints

### `GET /`

Serves the main index HTML file.

### `GET /forms`

Serves the form HTML file for resume input.

### `POST /submit-form`

Handles form submissions and saves user data in a JSON file.

### `GET /generate-pdf`

Generates a PDF resume from the stored user data.

## Data Structure

User data is stored in a JSON file and follows this structure:

```json
{
  "basics": {
    "name": "",
    "label": "",
    "email": "",
    "phone": "",
    "url": "",
    "summary": "",
    "location": {
      "address": "",
      "postalCode": "",
      "city": "",
      "countryCode": "",
      "region": ""
    },
    "profiles": [
      {
        "network": "",
        "username": "",
        "url": ""
      }
    ]
  },
  "work": [
    {
      "name": "",
      "position": "",
      "url": "",
      "startDate": "",
      "endDate": "",
      "summary": "",
      "highlights": [""]
    }
  ],
  "volunteer": [
    {
      "organization": "",
      "position": "",
      "url": "",
      "startDate": "",
      "endDate": "",
      "summary": ""
    }
  ],
  "education": [
    {
      "institution": "",
      "url": "",
      "area": "",
      "studyType": "",
      "startDate": "",
      "endDate": "",
      "score": "",
      "courses": []
    }
  ],
  "awards": [
    {
      "title": "",
      "date": "",
      "awarder": "",
      "summary": ""
    }
  ],
  "certificates": [
    {
      "name": "",
      "date": "",
      "issuer": ""
    }
  ],
  "publications": [
    {
      "name": "",
      "publisher": "",
      "releaseDate": "",
      "url": "",
      "summary": ""
    }
  ],
  "skills": [
    {
      "name": "",
      "level": "",
      "keywords": []
    }
  ],
  "languages": [
    {
      "language": "",
      "fluency": ""
    }
  ],
  "interests": [
    {
      "name": "",
      "keywords": []
    }
  ],
  "references": [
    {
      "name": "",
      "reference": ""
    }
  ],
  "projects": [
    {
      "name": "",
      "description": "",
      "keywords": [],
      "url": "",
      "roles": [],
      "startDate": "",
      "endDate": "",
      "entity": "",
      "type": ""
    }
  ]
}

### Acknowledgments

- [express-session](https://github.com/expressjs/session)
- [pdf-lib](https://github.com/Hopding/pdf-lib)
- [body-parser](https://github.com/expressjs/body-parser)

