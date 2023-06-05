const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 9000;

console.log("Connecting to MongoDB Atlas...");
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas!");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log("Error connecting to MongoDB Atlas:", err));

// Rest of your server code goes here...
// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});