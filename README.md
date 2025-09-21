# MongoDB Express React NodeJS (MERN) Reference Implementation

This is an example implementation of a restaurant review application using the Express, Node.JS, React and MongoDB (MERN) stack.

The following technologies are used:

* MongoDB (via Docker container) for the database
* Express and Node.JS for the backend API
* React for the client

## Prerequisites

The following are required:

* Docker and Docker Compose
* Node.JS (tested with v24.6.0)

## Running with Docker Compose (Recommended)

The easiest way to run the entire application is using Docker Compose, which will start all services including MongoDB.

### Quick Start

1. Clone the repository
2. Build and start all services:

```bash
docker-compose up --build
```

This will start:
- MongoDB container on port 27017
- Backend API on port 5001
- Frontend React app on port 3000

Visit http://localhost:3000 to access the application.

### Docker Services

- **MongoDB**: Local MongoDB instance with persistent data storage
- **Backend**: Express.js API server
- **Frontend**: React development server

### Stopping the Application

```bash
docker-compose down
```

To remove all data and start fresh:

```bash
docker-compose down -v
docker-compose up --build
```

## Development Setup (Alternative)

For local development without Docker:

### Backend Setup

```bash
cd backend
npm install
```

Required dependencies:
- express
- cors
- mongodb
- dotenv

### Frontend Setup

```bash
cd frontend
npm install
```

### Running Locally

1. Start MongoDB (requires local MongoDB installation)
2. Start the backend:
```bash
cd backend
npm start
```

3. Start the frontend:
```bash
cd frontend
npm start
```

The backend runs on port 8000 and frontend on port 3000.