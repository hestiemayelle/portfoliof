const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const projectRoutes = require("./routes/projectRoutes");
const experienceRoutes = require("./routes/experienceRoutes");
const testimonialRoutes = require("./routes/testimonialRoutes");
const serviceRoutes = require("./routes/serviceRoutes");

const app = express();

const PORT = process.env.PORT;
const DB_URI = process.env.MONGO_URI;

console.log("Connecting to MongoDB Atlas...");
mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas!");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log("Error connecting to MongoDB Atlas:", err));

// Rest of your server code goes here...
// Middleware
app.use(cors({
  "origin" : "https://hestiemayelle-portfolio.vercel.app",
  "methods" : ["GET", "POST", "PATCH", "DELETE"]
}));
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

// Routes
app.use("/projects", projectRoutes);
app.use("/testimonials", testimonialRoutes);
app.use("/experiences", experienceRoutes)
app.use("/services", serviceRoutes);