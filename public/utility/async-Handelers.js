import e from "cors";
import express from "express";


//This is promise concept 

let asynchandler=(requesthandeler) =>{
    (req, res, next) =>{
        Promise.resolve(requesthandeler(req,res,next)).
        catch((err)=>next(err))
    }
}
   

/* this method is consists of requesting and getting result as per request & (next)is basically check the different condition 
 which is applied on it that it passes or not if yes then moves to  the next condition 
  
 (try -catch approach)

let app=express()
    
 let asynchandler=(fu) => async((req,res,next)=>{

    try{
        await fu(req,res,next)

    }catch(error){ 
        res.status("errrr:",error.code || 500).json({
        success: false,
        message: error.message
        })
}

  
}


  
)
*/

export {asynchandler}
