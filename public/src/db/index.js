import mongoose from "mongoose";
import { DB_Name } from "../constants.js";


let connectDB= async()=>{
    try{  const connectionInstance=
         await mongoose.connect(`${"mongodb://localhost:27017/anish"}/${DB_Name}`)        // CONNECTED LOCAL SERVER DATABASE
         console.log(`\n MONGODB connected !! DB HOST: ${connectionInstance.connect.host}`);

    }
    catch (error){
        console.log(" MONGOdb error:",error);
        process.exit(1);
    }
}
export default connectDB