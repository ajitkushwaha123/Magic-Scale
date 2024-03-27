const mongoose = require('mongoose');

const fromSchema  = mongoose.Schema({
    
        name : {
            type : String,
            required : true,
        },

        phone : {
            type : Number,
            required : true,
        }
        ,
        service : {
            type : String,
        }
} , {timestamps : true})

const Form = mongoose.model("Form" , fromSchema);

module.exports = Form;