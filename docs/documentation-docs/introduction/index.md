---
sidebar_position: 1
title: Documentation Introduction
slug: /
---

# ITA Inventory Management System
Welcome to the ITA Inventory Management System website! This documentation will help you install, configure, and use the ITA inventory application.

## What is the ITA Inventory Management System website?
The ITA Inventory Management System website is a web application designed to streamline and manage therapists' order requests. The platform allows therapists to submit order requests, which administrators can then review, approve, and track.

## Key Features
<!-- IGNORE THE &nbsp; BELOW. USED FOR STYLING AND FORMATTING OF TABLE. -->
| Feature | Description |
|---------|-------------|
| Order Management | Submit, track, and manage orders efficiently, with the option to filter. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
| Budget Management | Control spending with built-in budget tracking by program. |
| Role-Based Access | Different permission levels for therapists and administrators. |
| Order Data Tracking | Administrators can view and export order data in .csv or .xlsx format. |

## Tech Stack

| Technology | Description |
|------------|-------------|
| React.js | Specifically Create React App (CRA) for creating UI components, using React 19.0.0. |
| React Router | Allows for seamless navigation across the application. |
| JavaScript | Modern ES6+ JavaScript for both frontend and backend development. |
| styled-components | Customize HTML elements with any styling needed. |
| Node.js | Server-side JavaScript runtime with Express.js framework for the ITA API. |
| Supabase | Backend-as-a-service platform for database, authentication, and storage. Database built using PostgreSQL. |
| Authentication | Supabase Auth with JWT, Google OAuth integration. |
| Vercel | Hosting and deploying platform used to deploy the ITA Inventory application. |
| ESLint & Prettier | Used for code formatting consistency in a group-based development environment. |


## Project Structure Overview
The project follows a modular structure, split up by the frontend, backend, and documentation:
```
.
├── frontend/          # React frontend application (CRA)
|   ├── public/        # Images and Icons
|   ├── src/           # Main frontend app directory
├── backend/           # Node.js backend server
|   ├── src/           # Main backend directory
├── documentation/     # Project documentation (Docusaurus)
|   ├── blog/          # Responsible for publishing updates regarding ITA app
|   ├── docs/          # Holds all documentation sub-pages 
|   ├── src/           # Contains components and styling used for docs site
|   ├── static/        # Images used on docs site
```

## Quick Links
- [Setup & Installation](/installation)
- [Quick Start](/installation#quick-start)
- [Usage Guide](/usage)
- [Project Structure](/project-structure)
