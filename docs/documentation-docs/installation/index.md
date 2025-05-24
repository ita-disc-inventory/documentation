---
sidebar_position: 2
---

# Installation

This guide will walk you through the process of setting up the ITA application on your local development environment.

## Prerequisites

Before installing the ITA Inventory web app, ensure you have the following installed:

|                Tool           |       (Minimum) Version          | Check command       |
|          :-----------:        | :-----------:              | :-----------:       |
| [Node.js](https://nodejs.org/)| **18.0**                   | ```node -v```       |
| [npm](https://www.npmjs.com/) | Latest LTS                 | ```npm -v```        | 
| [Git](https://git-scm.com/)   | Any non-deprecated version | ```git --version``` | 

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v8 or higher) or [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/downloads) for cloning the repository

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

## Backend Setup

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

## Frontend Setup

Navigate to the frontend directory and install dependencies:

```bash
cd ../frontend
npm install
```

## Running the Application

### Start the Backend Server

```bash
cd backend
npm run dev
```

The backend server will start on http://localhost:3000.

### Start the Frontend Development Server

In a new terminal:

```bash
cd frontend
npm start
```

The frontend development server will start on http://localhost:3001. You should be able to navigate to this URL
and view the ITA Inventory application.

## Troubleshooting

If you encounter issues during installation:

1. Ensure all prerequisites are correctly installed
3. Check that all dependencies were properly installed
4. Ensure required ports (3000, 3001) are available

