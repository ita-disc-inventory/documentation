---
sidebar_position: 2
---

# Installation

This guide will walk you through the process of setting up the DISC application on your local development environment.

## Prerequisites

Before installing DISC, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v8 or higher) or [Yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) (v13 or higher)
- [Git](https://git-scm.com/) for cloning the repository

## Clone the Repository

```bash
git clone https://github.com/yourusername/DISC.git
cd DISC
```

## Backend Setup

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

### Database Setup

1. Create a PostgreSQL database for DISC:

```bash
createdb disc_db
```

2. Copy the example environment file and configure it with your database credentials:

```bash
cp .env.example .env
```

3. Edit the `.env` file with your database connection details:

```
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=disc_db
JWT_SECRET=your_secret_key
```

4. Run database migrations:

```bash
npm run migrate
```

5. (Optional) Seed the database with sample data:

```bash
npm run seed
```

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
REACT_APP_BACKEND_URL=http://localhost:5000
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

For database connection issues, try:

```bash
psql -U postgres -h localhost -d disc_db
```

If you can connect via psql but the application can't, check your database credentials in the `.env` file. 