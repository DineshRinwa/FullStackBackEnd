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

<pre>
├── Config
│   └── db.js           # MongoDB connection configuration
├── Middleware
│   └── auth.js         # Authentication middleware
├── Model
│   ├── registerModel.js # User schema and model
│   └── productModel.js  # Product schema and model
├── Route
│   ├── registerRoute.js # Registration and login routes
│   └── productRoute.js  # Product management routes
├── .env                 # Environment variables (e.g., PORT, MONGODB_URL, SECRET_KEY)
├── .gitignore           # Ensures sensitive files like `.env` are not pushed to the repository
└── index.js             # Entry point of the application
  </pre>
