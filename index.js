const express = require("express")
const app = express()
const port = 3000

app.use( (req, res, next) => {
    console.log('Middleware executed for /users/kakfna requests');
    next();
  });

app.get("/users",(req,res,next)=>{
    console.log("middleware 1")
    next()
})

app.use("/",(rew,res,next)=>{
    console.log("middleware 2")
    next()
    
})
app.use("/url-req",(req,res,next)=>{
    res.send("ye le")
})
app.use((req,res,next)=>{
    console.log("middleware")
    res.send("404")
})

app.listen(port,()=>{



    console.log("server is running on port 3000")
})
