const mongoose = require("mongoose");
const Experience = require("../models/experienceModel");

async function getAllExperience(req, res, next){
    try {
         const experiences = await Experience.find({})

         return next(
            res.status(200).json(experiences)
         )
    } catch (error) {
        return next(
            res.status(400).json({
                message : error
            })
        )
    }
   
}

async function getSingleExperience(req, res, next){
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message : "Invalid Experience Id"
            })
        )
    }

    const experience = await Experience.findById(id)

    if(!experience){
        return next(
            res.status(404).json({
                message : "Experience Not Found!"
            })
        )
    }

    return next(
        res.status(200).json(experience)
    )
}

async function createExperience(req, res, next){
    const experienceInfo = req.body;

    try {
        const newExperience = await Experience.create(experienceInfo)

        return next(
            res.status(200).json({
                message : "Experience added successfully!"
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

async function updateExperience(req, res, next){
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message : "Invalid Experience ID"
            })
        )
    }

    const updatedExperience = await Experience.findByIdAndUpdate({_id : id}, { ...req.body})

    if(!updateExperience){
        return next(
            res.status(404).json({
                message : "Experience not Found!"
            })
        )
    }

    return next(
        res.status(200).json({
            message : "Experience Successfully Updated!"
        })
    )
}

async function deleteExperience(req, res, next){
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message : "Invalid Experience ID"
            })
        )
    }

    const experience = await Experience.findByIdAndDelete(id)

    if(!experience){
        return next(
            res.status(404).json({
                message : "Experience not Found!"
            })
        )
    }

    return next(
        res.status(200).json({
            message : "Experience Successfully Updated!"
        })
    )
}

module.exports = { getAllExperience, getSingleExperience, createExperience, updateExperience, deleteExperience}