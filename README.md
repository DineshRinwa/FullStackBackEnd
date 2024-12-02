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

