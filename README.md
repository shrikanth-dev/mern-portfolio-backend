# shrikanth.dev

## Table of contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Links](#links)
  - [Built With](#built-with)
- [Features](#features)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
- [Author](#author)

## Overview

A clean, scalable Node.js + Express + MongoDB backend powering the AI-enabled developer portfolio with JWT-based admin authentication, RESTful APIs for content management, and OpenAI-powered summarization for blogs.

### The Challenge

- Build REST APIs to manage blogs, projects, certifications, and testimonials.
- Secure admin login with JWT and hashed passwords.
- Integrate OpenAI API for summarizing blogs.
- Ensure scalability and maintainability for future enhancements.

### Links

- **Live API:** [https://shrikanthdev-portfolio.vercel.app/](https://shrikanthdev-portfolio.vercel.app/)
- **Frontend Repository:** [https://github.com/shrikanth-dev/mern-portfolio-frontend](https://github.com/shrikanth-dev/mern-portfolio-frontend)
- **Backend Repository:** [https://github.com/shrikanth-dev/mern-portfolio-backend](https://github.com/shrikanth-dev/mern-portfolio-backend)

### Built With

- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- bcrypt for password hashing
- OpenAI API
- CORS

## Features

- RESTful APIs for projects, blogs, certifications, testimonials  
- Admin login with JWT authentication  
- Password hashing with bcrypt for security  
- OpenAI-powered blog summarization  
- CORS enabled for frontend integration  
- Organized, clean folder structure for scalability

## Author

- Shrikanth-Dev
- [GitHub](https://github.com/shrikanth-dev)
- LinkedIn - [@G Srikanth](https://www.linkedin.com/in/g-srikanth-gs)

## Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/portfolio-backend.git
cd portfolio-backend

2. **Install dependencies:**

```bash
npm install

3. **Add environment variables:**

Create a .env file:
```ini
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key

4. **Run the development server:**

```bash
npm run dev



