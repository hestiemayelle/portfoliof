const mongoose = require("mongoose");
const Project = require("../models/projectModel");

async function getAllProject(req, res, next){
    try {
         const projects = await Project.find({})

         return next(
            res.status(200).json(projects)
         )
    } catch (error) {
        return next(
            res.status(400).json({
                message : error
            })
        )
    }
   
}

async function getSingleProject(req, res, next){
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message : "Invalid Project Id"
            })
        )
    }

    const project = await Project.findById(id)

    if(!project){
        return next(
            res.status(404).json({
                message : "Project Not Found!"
            })
        )
    }

    return next(
        res.status(200).json(project)
    )
}

async function createProject(req, res, next){
    const projectInfo = req.body;

    try {
        const newProject = await Project.create(projectInfo)

        return next(
            res.status(200).json({
                message : "Project added successfully!"
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

async function updateProject(req, res, next){
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message : "Invalid Project ID"
            })
        )
    }

    const updatedProject = await Project.findByIdAndUpdate({_id : id}, { ...req.body})

    if(!updateProject){
        return next(
            res.status(404).json({
                message : "Project not Found!"
            })
        )
    }

    return next(
        res.status(200).json({
            message : "Project Successfully Updated!"
        })
    )
}

async function deleteProject(req, res, next){
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message : "Invalid Project ID"
            })
        )
    }

    const project = await Project.findByIdAndDelete(id)

    if(!project){
        return next(
            res.status(404).json({
                message : "Project not Found!"
            })
        )
    }

    return next(
        res.status(200).json({
            message : "Project Successfully Updated!"
        })
    )
}

module.exports = { getAllProject, getSingleProject, createProject, updateProject, deleteProject}