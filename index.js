const express = require("express");
require("dotenv").config();
const cors = require('cors'); 
const connect = require("./Config/db");
const Registerstion = require("./Route/registerstionRoute"); // Import Sign and Login Route
const Product = require("./Route/productRouter");

const Port = process.env.PORT;
const app = express();

app.use(cors()); // Enable CORS
app.use(express.json());
app.use("/api/auth", Registerstion);
app.use("/api", Product);


app.get("/health", (req, res) => {
  res.send("Health is Good...");
});

// conncet mongoDB with Server
app.listen(Port, async () => {
  await connect();
  console.log("Server is Start...");
});
