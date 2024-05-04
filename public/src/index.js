import mongoose  from "mongoose";
import { DB_Name } from "./constants.js";
import express from "express"
import connectDB from "./db/index.js";

//const app=express()
//function connectDB(){}
  
/*(async()=>{
    try{

      await  mongoose.connect('${process.env.MONGODB_URI} /${DB_Name}')

      app.on("error",(error)=>{
        console.log("error:",error);
        throw error
      })
      app.listen(process.env.port,()=>{

        console.log("app started ${process.env.port}");
      })
    }
    catch(error){
        console.log("ERROR :",error);
    }
})()*/

//mongoose.connect()
connectDB()