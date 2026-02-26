# MegaplexPrime - Real Estate CMS

## Project Overview
MegaplexPrime is a premium, full-stack real estate Content Management System (CMS). Built with a modern tech stack, this application serves as both an elegant public-facing promotional website for luxury real estate and a comprehensive, SaaS-style admin dashboard for editing the site's content dynamically.

This project was built to deliver an "Interview Level" standard of quality with:
- A sophisticated, responsive UI featuring a clean white and gold theme.
- A single-document MongoDB schema for highly flexible content management.
- A fully functional authentication-protected Admin Dashboard.
- RESTful API architecture connecting the frontend to the backend database.

## Tech Stack
### Frontend
- **React 19** with **Vite**
- **Tailwind CSS v4** (for modern, responsive, premium UI)
- **React Router v7** (for client-side routing)
- **Axios** (for API communication)
- **Lucide React** (for professional iconography)

### Backend
- **Node.js** with **Express.js** (ES Modules)
- **MongoDB & Mongoose** (for flexible, JSON-like document storage)
- **Cors & Dotenv** (for cross-origin requests and environment variable management)

## Admin Login Credentials
Access the admin portal at `/admin` using the following credentials:
- **Email:** `admin@gmail.com`
- **Password:** `1234`

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher recommended)
- MongoDB instance (local or Atlas)

### 1. Clone & Configure Backend
1. Navigate to the `backend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory with your MongoDB connection string:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/realestate
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```

### 2. Configure & Run Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Access the public site at `http://localhost:5173`.
5. Access the admin dashboard at `http://localhost:5173/admin`.

## Live URLs
- **Frontend Vercel Deployment:** *(To be added post-deployment)*
- **Backend Render Deployment:** *(To be added post-deployment)*

## Project Structure
```text
real-estate-cms/
│
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable UI parts (Hero, Amenities, FAQ, etc.)
│   │   ├── pages/       # Route components (Home, AdminLogin, AdminDashboard)
│   │   ├── services/    # API calls using Axios
│   │   ├── index.css    # Tailwind CSS entry
│   │   └── App.jsx      # React Router setup
│   └── package.json
│
└── backend/
    ├── controllers/     # Business logic for auth and content
    ├── models/          # Mongoose schema (Content.js)
    ├── routes/          # Express route definitions
    ├── server.js        # Main entry point
    └── package.json
```

## Screenshots
*(Insert Screenshots Here)*
