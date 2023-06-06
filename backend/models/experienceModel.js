const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Experience name required"],
        unique : [true, "Name already in used"]
    },
    experience : [
        {
            skillName : {
                type: String, 
                required: [true, "skills name required"],
                unique : [true, "Skill name must be unique"]
            },
            skillLevel : {
                type : String,
                required : [true, "Skill Level required"]
            }
        }
    ]
},{ timestamps : true});

const Experience = mongoose.model("Experience", experienceSchema);

module.exports = Experience;