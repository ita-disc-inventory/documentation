---
sidebar_position: 2
---

# Installation

This guide will walk you through the process of setting up the ITA application on your local development environment.

## Prerequisites

Before installing the ITA Inventory web app, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v8 or higher) or [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/) for cloning the repository

## Clone the Repositories
Clone each repository separately:

**Frontend**
```bash
git clone https://github.com/ita-disc-inventory/frontend.git
```

**Backend**
```bash
git clone https://github.com/ita-disc-inventory/backend.git
```

**Documentation**
```bash
git clone https://github.com/ita-disc-inventory/documentation.git
```

## Backend Setup

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

### Database Setup

backend setup...

## Frontend Setup

Navigate to the frontend directory and install dependencies:

```bash
cd ../frontend
npm install
```

Configure the frontend environment:

```bash
cp .env.example .env
```

Edit the `.env` file to point to your backend:

```
REACT_APP_BACKEND_URL=http://localhost:5050
```

## Running the Application

### Start the Backend Server

```bash
cd backend
npm run dev
```

The backend server will start on http://localhost:5000.

### Start the Frontend Development Server

In a new terminal:

```bash
cd frontend
npm start
```

The frontend development server will start on http://localhost:3000.

## Troubleshooting

If you encounter issues during installation:

1. Ensure all prerequisites are correctly installed
2. Verify database connection details in the `.env` file
3. Check that all dependencies were properly installed
4. Ensure required ports (3000, 5000) are available

If you can connect via psql but the application can't, check your database credentials in the `.env` file. 