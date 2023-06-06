const mongoose = require("mongoose");
const Service = require("../models/serviceModel");

async function getAllService(req, res, next){
    try {
         const services = await Service.find({})

         return next(
            res.status(200).json(services)
         )
    } catch (error) {
        return next(
            res.status(400).json({
                message : error
            })
        )
    }
   
}

async function getSingleService(req, res, next){
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message : "Invalid Service Id"
            })
        )
    }

    const service = await Service.findById(id)

    if(!service){
        return next(
            res.status(404).json({
                message : "Service Not Found!"
            })
        )
    }

    return next(
        res.status(200).json(service)
    )
}

async function createService(req, res, next){
    const serviceInfo = req.body;

    try {
        const newService = await Service.create(serviceInfo)

        return next(
            res.status(200).json({
                message : "Service added successfully!"
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

async function updateService(req, res, next){
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message : "Invalid Service ID"
            })
        )
    }

    const updatedService = await Service.findByIdAndUpdate({_id : id}, { ...req.body})

    if(!updateService){
        return next(
            res.status(404).json({
                message : "Service not Found!"
            })
        )
    }

    return next(
        res.status(200).json({
            message : "Service Successfully Updated!"
        })
    )
}

async function deleteService(req, res, next){
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message : "Invalid Service ID"
            })
        )
    }

    const service = await Service.findByIdAndDelete(id)

    if(!service){
        return next(
            res.status(404).json({
                message : "Service not Found!"
            })
        )
    }

    return next(
        res.status(200).json({
            message : "Service Successfully Updated!"
        })
    )
}

module.exports = { getAllService, getSingleService, createService, updateService, deleteService}