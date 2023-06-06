const mongoose = require("mongoose");
const Testimonial = require("../models/testimonialModel");

async function getAllTestimonial(req, res, next){
    try {
         const testimonials = await Testimonial.find({})

         return next(
            res.status(200).json(testimonials)
         )
    } catch (error) {
        return next(
            res.status(400).json({
                message : error
            })
        )
    }
   
}

async function getSingleTestimonial(req, res, next){
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message : "Invalid Testimonial Id"
            })
        )
    }

    const testimonial = await Testimonial.findById(id)

    if(!testimonial){
        return next(
            res.status(404).json({
                message : "Testimonial Not Found!"
            })
        )
    }

    return next(
        res.status(200).json(testimonial)
    )
}

async function createTestimonial(req, res, next){
    const testimonialInfo = req.body;

    try {
        const newTestimonial = await Testimonial.create(testimonialInfo)

        return next(
            res.status(200).json({
                message : "Testimonial added successfully!"
            })
        )
    } catch (error) {
        return next(
            res.status(400).json({
                message : error
            })
        )
    }
}

async function updateTestimonial(req, res, next){
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message : "Invalid Testimonial ID"
            })
        )
    }

    const updatedTestimonial = await Testimonial.findByIdAndUpdate({_id : id}, { ...req.body})

    if(!updateTestimonial){
        return next(
            res.status(404).json({
                message : "Testimonial not Found!"
            })
        )
    }

    return next(
        res.status(200).json({
            message : "Testimonial Successfully Updated!"
        })
    )
}

async function deleteTestimonial(req, res, next){
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message : "Invalid Testimonial ID"
            })
        )
    }

    const testimonial = await Testimonial.findByIdAndDelete(id)

    if(!testimonial){
        return next(
            res.status(404).json({
                message : "Testimonial not Found!"
            })
        )
    }

    return next(
        res.status(200).json({
            message : "Testimonial Successfully Updated!"
        })
    )
}

module.exports = { getAllTestimonial, getSingleTestimonial, createTestimonial, updateTestimonial, deleteTestimonial}