# FullStackBackEnd

<h1>Backend Documentation</h1>

<h2>Overview</h2>
<p>This project provides a robust backend service built using Node.js, Express.js, and MongoDB. The application includes user authentication, product management, and role-based access control (Admin, Seller, Buyer). The backend exposes RESTful APIs for these functionalities.</p>

<h2>Key Features:</h2>
<li>User registration and authentication (JWT-based).</li>
<li>Role-based access control (Admin, Seller, Buyer).</li>
<li>Product management (Add, Get, Update, Delete).</li>
<li>Secure MongoDB connection.</li>
<li>Organized folder structure for scalability.</li>

<p>├── Config  </p>
<p>|   └── db.js           # MongoDB connection configuration </p>
<p>├── Middleware  <p></p>
<p>│   └── auth.js         # Authentication middleware </p>
<p>├── Model  <p></p>
<p>│   ├── registerModel.js # User schema and model </p>
<p>│   └── productModel.js  # Product schema and model </p>
<p>├── Route  <p></p>
<p>│   ├── registerRoute.js # Registration and login routes  </p>
<p>│   └── productRoute.js  # Product management routes  </p>
<p>├── .env                 # Environment variables (e.g., PORT, MONGODB_URL, SECRET_KEY) </p>
<p>├── .gitignore           # Ensures sensitive files like `.env` are not pushed to the repository </p>
<p>└── index.js             # Entry point of the application  </p>


A robust backend system for managing users and products with role-based access control (RBAC) using **Node.js**, **Express**, and **MongoDB**. The project includes user registration, login, authentication, product management, and error handling.

## Features

- **Authentication**: User registration and login with password hashing.
- **Authorization**: Role-based access control (Admin, Seller, Buyer).
- **Product Management**: CRUD operations on products.
- **Error Handling**: Centralized error response system.
- **Secure API**: JWT-based authentication.
- **MongoDB Integration**: Mongoose for database management.

---

## Installation

### Prerequisites
- Node.js v14+ installed
- MongoDB installed or an active MongoDB Atlas URI
- A `.env` file with the following keys:
  ```plaintext
  PORT=<Your Port>
  MONGODB_URL=<Your MongoDB URI>
  SECRET_KEY=<Your JWT Secret Key>
