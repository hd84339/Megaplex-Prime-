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

## Deployment Guide

### 1. Deploying the Backend (Render)
1. Push this repository to your GitHub account.
2. Sign up / Log in to [Render](https://render.com/).
3. Click **New +** and select **Web Service**.
4. Connect your GitHub repository and select this project.
5. Configure the deployment:
   - **Name:** `megaplexprime-api` (or similar)
   - **Root Directory:** `backend` *(Important!)*
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
6. Scroll down to **Environment Variables** and add:
   - `MONGO_URI`: Your MongoDB Atlas connection string.
   - `PORT`: `5000` (Optional, Render will automatically assign a port).
7. Click **Create Web Service**. Wait for the build to finish, then copy your Render API URL (e.g., `https://megaplexprime-api.onrender.com`).

### 2. Deploying the Frontend (Vercel)
1. Sign up / Log in to [Vercel](https://vercel.com/).
2. Click **Add New** > **Project**.
3. Import the same GitHub repository.
4. Configure the project:
   - **Project Name:** `megaplexprime`
   - **Framework Preset:** `Vite`
   - **Root Directory:** `frontend` *(Important!)*
5. Open the **Environment Variables** section and add:
   - **Name:** `VITE_API_URL`
   - **Value:** `https://your-render-api-url.onrender.com/api` *(Paste the URL you got from Render in step 1, ensuring it ends in `/api`)*.
6. Click **Deploy**. Vercel will build and host your frontend website.

## Live URLs
- **Frontend Vercel Deployment:** *(Add your deployed Vercel link here)*
- **Backend Render Deployment:** *(Add your deployed Render link here)*

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
