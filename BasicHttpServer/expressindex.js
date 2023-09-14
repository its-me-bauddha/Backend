const express = require("express");

 const PORT  = 3000;

//create a express server object
const app = express();

const myLogger = (req,res,next)=>{
    console.log("Logging  from  middleware 1");
    next(); // calls the next middleware
}

const extLogger = (req,res,next)=>{
    console.log("Logging from middleware 2");
    next();
}


app.get("/home" , (request,response) =>{
    response.send("Hi there");
})

app.post("/home",[myLogger,extLogger] , (request,response) =>{
    //response.send("Hi there .. this is a post request");
    console.log("Last middleware")
    response.json(
        {
            message :"OK"
        }
    )
})

app.listen(PORT, ()=>{
    console.log(`App started listing a port : ${PORT}`);
})