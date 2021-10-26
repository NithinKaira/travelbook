const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:3
    },
    password:{
        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:8
    },
    email:{
        type:String,
        required:true,
        unique:false,
        trim:true
    }
});

const user = mongoose.model('User',userSchema);

module.exports = user;
