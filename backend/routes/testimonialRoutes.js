const express = require("express");
const { getAllTestimonial, getSingleTestimonial, updateTestimonial, createTestimonial, deleteTestimonial } = require("../controllers/testimonialController");

const router = express.Router();

// Get all Testimonials
router.get("/", getAllTestimonial);

// Get a single Testimonial
router.get("/:id", getSingleTestimonial);

// Update a Testimonial
router.patch("/:id", updateTestimonial);

// Create a new Testimonial 
router.post("/", createTestimonial);

// delete a Testimonial 
router.delete("/:id", deleteTestimonial);

module.exports = router;