# Loan Management System

This project is a full-stack loan management system built with:

- Backend: NestJS (TypeScript)
- Frontend: Vue 3 (Vite)
- Auth: JWT-based authentication with role-based access control

## Project Structure

    root/
    backend/ # NestJS API
    frontend/ # Vue 3 application
    data/ # JSON datasets used by backend


## Features

### Backend
- JWT Authentication (`/login`, `/logout`)
- Role-based access control (staff, admin, superadmin)
- Loans API:
  - Fetch all loans
  - Filter loans by status
  - Fetch loans by user email
  - Fetch expired loans
  - Delete loan (superadmin only)
- Middleware:
  - Global error handling
  - Request logging
  - Basic rate limiting
  - CORS enabled

### Frontend
- Login page built with Vue 3
- JWT token stored in localStorage
- Responsive UI
- API integration with backend login endpoint

---

## Setup Instructions

### Backend

```bash
cd backend
bun install
bun run start:dev
```

Backend runs on:

http://localhost:3000

### Frontend

```bash
cd frontend
bun install
bun run dev
```

Frontend runs on:

http://localhost:5173

### Deployment

Frontend demo:

https://buysimply-loans.vercel.app

Backend API:

http://localhost:3000

### Authentication

Login endpoint:

    POST /login

Sample request:

```json
{
  "email": "edwinjohn@example.com",
  "password": "12345Pass"
}
```

Sample response:

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "email": "edwinjohn@example.com",
    "role": "staff"
  }
}
```

### Roles
- staff → limited loan visibility (hides totalLoan)
- admin → full access
- superadmin → full access + delete permissions

### Notes
- Data is loaded from local JSON files (/data)
- No database is used for simplicity
- Built within assessment time constraints

## Author

Built as part of a technical assessment project.