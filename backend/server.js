const express=require("express")


const app=express()




app.get("/",(req,res)=>
{
    res.send("hellow word")
})


app.listen(8080,()=>
{
    console.log("server is running on port 5000")
})