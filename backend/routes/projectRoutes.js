const express = require("express");
const { getAllProject, getSingleProject, updateProject, createProject, deleteProject } = require("../controllers/projectController");

const router = express.Router();

// Get all Projects
router.get("/", getAllProject);

// Get a single Project
router.get("/:id", getSingleProject);

// Update a Project
router.patch("/:id", updateProject);

// Create a new Project 
router.post("/", createProject);

// delete a Project 
router.delete("/:id", deleteProject);

module.exports = router;