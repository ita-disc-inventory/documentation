---
sidebar_position: 4
---

# Project Structure

The DISC application follows a modern client-server architecture, with separate frontend and backend components. This page provides an overview of the project structure to help developers understand the codebase.

## Root Directory Structure

```
/
├── frontend/            # React frontend application
├── backend/             # Node.js backend server
├── documentation/       # Project documentation (Docusaurus)
├── .github/             # GitHub workflow configurations
├── package.json         # Root package.json for project-wide scripts
└── README.md            # Project overview and quick start guide
```

## Frontend Structure

```
frontend/
├── public/              # Static assets
│   ├── index.html       # HTML template
│   └── assets/          # Images, fonts, etc.
├── src/                 # Source code
│   ├── App.jsx          # Main application component
│   ├── index.jsx        # Application entry point
│   ├── common/          # Shared components and utilities
│   │   ├── components/  # Reusable UI components
│   │   │   ├── form/    # Form components
│   │   │   ├── navigation/  # Navigation components
│   │   │   ├── table_pop_ups/  # Popup dialogs for tables
│   │   │   ├── templates/  # Component templates
│   │   │   └── admin_modals/  # Admin-specific modals
│   │   ├── contexts/    # React context providers
│   │   └── utils/       # Utility functions
│   └── pages/           # Page components organized by routes
│       ├── admin/       # Admin pages
│       ├── auth/        # Authentication pages
│       ├── therapist/   # Therapist pages
│       └── settings/    # User settings pages
├── package.json         # Frontend dependencies and scripts
└── .env                 # Environment variables
```

## Backend Structure

```
backend/
├── src/                 # Source code
│   ├── app.js           # Express application setup
│   ├── server.js        # Server entry point
│   ├── controllers/     # Request handlers
│   ├── models/          # Database models
│   ├── routes/          # API route definitions
│   ├── middleware/      # Middleware functions
│   ├── services/        # Business logic
│   └── utils/           # Utility functions
├── config/              # Configuration files
│   └── database.js      # Database connection setup
├── migrations/          # Database migration files
├── seeds/               # Database seed data
├── package.json         # Backend dependencies and scripts
└── .env                 # Environment variables
```

## Key Files

### Frontend

- **src/App.jsx**: Main application component that sets up routing
- **src/common/contexts/UserContext.jsx**: Manages user authentication state
- **src/common/contexts/OrderContext.jsx**: Manages order data and operations
- **src/common/components/OrderTable.jsx**: Central component for displaying orders

### Backend

- **src/app.js**: Express application configuration
- **src/controllers/authController.js**: Authentication logic
- **src/controllers/orderController.js**: Order management logic
- **src/routes/index.js**: API route definitions

## Database Schema

The application uses a PostgreSQL database with the following key tables:

- **users**: Stores user information and credentials
- **orders**: Tracks order details and status
- **programs**: Manages program information and budgets
- **items**: Stores information about ordered items

## Technology Stack

- **Frontend**:
  - React.js - UI framework
  - styled-components - CSS-in-JS styling
  - AG Grid - Data grid for displaying orders
  - React Router - Navigation and routing

- **Backend**:
  - Node.js - Runtime environment
  - Express - Web framework
  - Knex.js - SQL query builder and migrations
  - PostgreSQL - Relational database
  - JWT - Authentication 