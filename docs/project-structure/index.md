---
sidebar_position: 4
---

# Project Structure

The ITA Inventory application follows a modern client-server architecture, with separate frontend and backend components. This page provides an overview of the project structure to help developers understand the codebase.

## Root Directory Structure

```
.
├── frontend/            # React frontend application
├── backend/             # Node.js backend server
└── documentation/       # Project documentation (Docusaurus)
```

## Frontend Structure

```
frontend/
├── public/              # Static assets (Images, fonts, etc.)
│   ├── index.html       # HTML file serving as root entry point
│   └── .png's...        # Assortment of pngs
├── src/                 # Source code
│   ├── App.jsx          # Main application component
│   ├── index.jsx        # Application entry point
│   ├── common/          # Shared components and utilities
│   │   ├── components/  # Reusable components
│   │   │   ├── form/    # Form components
│   │   │   ├── navigation/  # Navigation components
│   │   │   ├── table_pop_ups/  # Popup dialogs for order table
│   │   │   ├── templates/  # Component templates
│   │   │   └── admin_modals/  # Admin-specific modals
│   │   ├── contexts/    # Custom context providers for user authentication & placing orders
│   │   └── utils/       # Status & Program mappings, constants, etc.
│   └── pages/           # Page components organized by routes
│       ├── account/     # Account/Profile pages
│       ├── admin/       # Admin-only pages
│       ├── Home/        # Home page
│       ├── not-found/   # 'Not Found' page, similar to 404
│       ├── settings/    # Settings page
└──     ├── therapist/   # Therapist Home page
```

## Backend Structure

```
backend/
├── src/                  # Source code
|   ├── config/           # Express application setup
|   ├── controllers/      # Server entry point
|   ├── middleware/       # Request handlers
│   ├── routes/           # API route definitions
│   └── server.js         # Utility functions
└── README.md             # MDX doc for backend
```

## Documentation Structure
```
documentation/
├── blog/                 # Responsible for publishing updates regarding ITA app
├── docs/                 # Holds all documentation sub-pages 
├── src/                  # Contains components and styling used for docs site
├── static/               # Images used on docs site
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