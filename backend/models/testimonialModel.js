const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
    clientName : {
        type : String, 
        required: [true, "Please enter a name"]
    },
    clientProfile : {
        type : String, 
        required : [true, "Please enter image url"]
    },
    testimonialMessage : {
        type: String, 
        required : [true, "Please you can not submit an empty testimony"]
    }
}, {timestamps : true});

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

module.exports = Testimonial;