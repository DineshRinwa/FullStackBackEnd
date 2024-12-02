# FullStackBackEnd

<h1>Backend Documentation</h1>

<h2>Overview</h2>
<p>This project provides a robust backend service built using Node.js, Express.js, and MongoDB. The application includes user authentication, product management, and role-based access control (Admin, Seller, Buyer). The backend exposes RESTful APIs for these functionalities.</p>
<br>
<br>
<h2>Key Features:</h2>
<li>User registration and authentication (JWT-based).</li>
<li>Role-based access control (Admin, Seller, Buyer).</li>
<li>Product management (Add, Get, Update, Delete).</li>
<li>Secure MongoDB connection.</li>
<li>Organized folder structure for scalability.</li>

<br>
<br>
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

  <br>
  <br>

  <h1>API Routes</h1> <br><br>
  
  <h2>User Authentication Routes (Route/registerRoute.js)</h2>
  <ul>
    <li><strong>POST /api/auth/signup</strong>: 
      Registers a new user with hashed passwords. 
      <ul>
        <li>Request Body: { username, email, password }</li>
        <li>Response: Success or error message</li>
      </ul>
    </li>
    <li><strong>POST /api/auth/login</strong>: 
      Logs in the user and returns a JWT token. 
      <ul>
        <li>Request Body: { email, password }</li>
        <li>Response: JWT token if login is successful</li>
      </ul>
    </li>
  </ul>

  <h2>Product Management Routes (Route/productRoute.js)</h2>
  <ul>
    <li><strong>POST /api/products</strong>: 
      Creates a product (restricted to Admin and Seller roles). 
      <ul>
        <li>Request Body: { name, description, price, stock, category }</li>
        <li>Response: Newly created product details</li>
        <li>Authorization: Requires Admin or Seller role</li>
      </ul>
    </li>
    <li><strong>GET /api/products</strong>: 
      Retrieves all products. 
      <ul>
        <li>Response: List of all products</li>
      </ul>
    </li>
    <li><strong>PUT /api/products/:id</strong>: 
      Updates a product (restricted to Admin and Seller roles). 
      <ul>
        <li>Request Body: { name, description, price, stock, category }</li>
        <li>Response: Updated product details</li>
        <li>Authorization: Requires Admin or Seller role</li>
      </ul>
    </li>
    <li><strong>DELETE /api/products/:id</strong>: 
      Deletes a product (restricted to Admin and Seller roles). 
      <ul>
        <li>Response: Success or error message</li>
        <li>Authorization: Requires Admin or Seller role</li>
      </ul>
    </li>
  </ul>
