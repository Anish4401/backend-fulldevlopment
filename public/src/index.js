import mongoose  from "mongoose";
import { DB_Name } from "./constants.js";
import express from "express"
import connectDB from "./db/index.js";

//const app=express()
//function connectDB(){}
  

connectDB()
.then(()=>{
    app.listen(process.env.port||3020,()=>{
           console.log(`succesfully connected:${process.env.port}`);    
    })
    app.on(`errr`,(error)=>{
      console.log("errr:",error);
    })
    throw error
  })
  .catch((error)=>{
         console.log("error on this:",error);
  })









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
//connectDB()