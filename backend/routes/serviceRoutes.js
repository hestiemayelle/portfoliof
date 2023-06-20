const express = require("express");
const { getAllService, getSingleService, updateService, createService, deleteService } = require("../controllers/serviceController");

const router = express.Router();

// Get all Services
router.get("/", getAllService);

// Get a single Service
router.get("/:id", getSingleService);

// Update a Service
router.patch("/:id", updateService);

// Create a new Service 
router.post("/", createService);

// delete a Service 
router.delete("/:id", deleteService);

module.exports = router;