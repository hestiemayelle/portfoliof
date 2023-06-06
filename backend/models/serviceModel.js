const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, "Please enter service title"],
        unique : [true, "Service title already exist"]
    },
    desciption : {
        type : [String],
        requires: [true, "Please provide service description"]
    }
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;