const Collection = require('../model/formModel')

const express = require('express')

const router = express.Router()

router.post('/', async (req, res) => {
    const {name, email, msg} = req.body

    try {
         const collection = await Collection.create({name, email, msg})
         res.status(200).json(collection)
    }catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = router