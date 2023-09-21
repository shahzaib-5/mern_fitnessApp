const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planSchema = new Schema({
    fname : {
        type : String,
        required : true
    },
    lname :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true
    },
    address :{
        type : String,
        required : true
    },
    country :{
        type : String,
        required : true
    },
    state :{
        type : String,
        required : true
    },
    image : String,
    
    // trainer :{
    //     type : String,
    //     required : true
    // },
    // type :{
    //     type : String,
    //     required : true
    // },
    
});

module.exports = ImageModel = mongoose.model("Myplan",planSchema);