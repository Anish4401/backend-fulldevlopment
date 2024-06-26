import express from "express";
import cookieparser from "cookie-parser";
import cors from "cors";


const app=express()


app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:'15kb'}))    // simliar to urlencoded  add data of user 
app.use(express.urlencoded({extended:true,limit:'15kb'}))   // this is used to add usersdata 
app.use(express.static("public"))   //this is used add file/data,folder ,photo in express
export {app}

