---
sidebar_position: 1
title: Introduction
slug: /
---

# ITA Inventory Management System
Welcome to the ITA Inventory Management System website! This documentation will help you install, configure, and use the ITA inventory application.

## What is the ITA Inventory Management System website?
The ITA Inventory Management System website is a web application designed to streamline and manage therapists' order requests. The platform allows therapists to submit order requests, which administrators can then review, approve, and track.

## Key Features
- **Order Management**: Submit, track, and manage orders efficiently, with the option to filter
- **Budget Management**: Control spending with built-in budget tracking by program
- **Role-Based Access**: Different permission levels for therapists and administrators
- **Order Data Tracking**: Administrators can view and export order data in .csv or .xlsx format

## Tech Stack
- **React.js**: Created with Create React App (CRA), using React 19.0.0 
- **JavaScript**: Modern ES6+ JavaScript for both frontend and backend development
- **Node.js**: Server-side JavaScript runtime with Express.js framework for the API
- **Supabase**: Backend-as-a-service platform for database, authentication, and storage
- **Authentication**: Supabase Auth with JWT, Google OAuth integration
- **Vercel**: Hosting and deploying platform

## Project Structure Overview
The project follows a modular structure, split up by the frontend and backend:
```
/
├── frontend/                 # React frontend application (CRA)
|   ├── public/               # Images and Icons
|   ├── src/                  # Main frontend app directory
|   |   ├── assets/           # Reusable SVGs
|   |   ├── common/           # Directory containing main app components
|   |   |   ├── components/   # Reusable components
|   |   |   ├── contexts/     # Custom contexts to track users and orders 
|   |   |   ├── layouts/      # Base layouts for app (e.g. Navbar)
|   |   |   ├── utils/        # Constants, mappings, etc.
|   |   ├── pages/            # Application pages
|   |   ├── utils/            # Util for localStorage tracking
|   |   ├── App.css           # CSS file for App component
|   |   ├── App.jsx           # Main application file
|   |   ├── index.css         # Global CSS file
├── backend/                  # Node.js backend server
|   ├── src/                  # Main backend directory
|   |   ├── config/           # Supabase config 
|   |   ├── controllers/      # Handles API calls based on router
|   |   ├── middleware/       # Authentication and request processing middleware
|   |   ├── routes/           # API route definitions
|   |   ├── server.js         # Main server entry point
├── documentation/            # Project documentation (Docusaurus)
|   ├── blog/                 # Responsible for publishing updates regarding ITA app
|   ├── docs/                 # Holds all documentation sub-pages 
|   ├── src/                  # Contains components and styling used for docs site
|   ├── static/               # Images used on docs site
```

## Quick Links
- [Setup & Installation](/installation)
- [Quick Start](/installation#quick-start)
- [Usage Guide](/usage)
- [Project Structure](/project-structure)
