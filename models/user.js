import mongoose from "mongoose";
// **************** creation of Schema
const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
 });
 
 // creating a model 
 export const User = mongoose.model("User",schema);
 