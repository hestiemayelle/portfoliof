const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter a title"],
        unique : [true, "Title already exist"]
    },
    githubLink: {
        type: String,
        required: [true, "Please enter a github link"]
    },
    liveDemoLink : {
        type: String, 
    },
    image: {
        type: String, 
        required: [true, "Please a project should have atleast an image"]
    }
},{timestamps : true});

const Project = mongoose.model("Project", projectSchema);

module.exports= Project;