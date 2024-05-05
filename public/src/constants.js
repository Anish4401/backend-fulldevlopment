import mongoose from "mongoose";

let userSchema= new mongoose.Schema({
     username:{
        type:String,
        required:true,
        unique:true
     },
     pass:{
        type:String,
        required:true,
        unique:true
     },
     email:{
        type:String,
        required:true,
        unique:true,
        lowerCase:true
     }
    


},{TimeRanges: true})

let user=mongoose.model(`user`,userSchema)



export let DB_Name="AAnish";