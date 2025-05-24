---
---

# System at a glance

The following provides an overview of the frontend and backend technology stacks implemented for the **Institute for Therapy through the Arts (ITA)** Therapist Order System, along with a breakdown of key directories within each codebase repository. This structure is intended to assist future developers in navigating and maintaining the platform efficiently.

### Frontend

| Framework           | Purpose                  |
|---------------------|--------------------------|
| React               | UI components            |
| React Router v7     | Navigation across pages. |
| styled-components   | Styling components.      |
| Supabase            | Authentication.          |

### Backend

| Framework/Tool      | Purpose                              |
|---------------------|--------------------------------------|
| Node.js, Express    | Server-side logic and API endpoints  |
| PostgreSQL          | Database (accessed via Supabase)     |
| ESLint, Prettier    | Code linting and formatting consistency |

## Key directories

### Frontend

**src/**  
Contains the source code for the React application, including components, pages, contexts, utilities, and styles.

**public/**  
Holds static assets such as the index.html file, favicon, images, and other resources that are publicly accessible.

**.github/**  
Contains GitHub-specific configurations, such as workflows for GitHub Actions (CI/CD), issue templates, and pull request templates.

**.vscode/**  
Includes settings specific to Visual Studio Code, such as recommended extensions and workspace settings, to help maintain a consistent development environment.

### Backend

**src/**  
Houses the source code for the backend application, including route handlers, middleware, and other server-side logic.

**uploads/**  
Used for storing uploaded files, such as images or documents, that are handled by the backend.

**.github/**  
Contains GitHub-specific configurations, such as workflows for GitHub Actions.

**.vscode/**  
Includes settings specific to Visual Studio Code, helping maintain a consistent development environment.

| Choice                        | Rationale                                                                 |
|-------------------------------|---------------------------------------------------------------------------|
| React for frontend            | Standard modern framework with component reusability                      |
| Styled-components             | For CSS-in-JS styling of components                                       |
| Backend built with Express.js | Lightweight, flexible Node.js framework                                   |
| Supabase for backend          | Open-source Firebase alternative; built-in auth and Postgres database     |
| Adopted Docusaurus for docs   | Built-in docs support, versioning, and quick setup                        |