const express = require("express");
const { getAllExperience, getSingleExperience, updateExperience, createExperience, deleteExperience } = require("../controllers/experienceController");

const router = express.Router();

// Get all Experiences
router.get("/", getAllExperience);

// Get a single Experience
router.get("/:id", getSingleExperience);

// Update a Experience
router.patch("/:id", updateExperience);

// Create a new Experience 
router.post("/", createExperience);

// delete a Experience 
router.delete("/:id", deleteExperience);

module.exports = router;