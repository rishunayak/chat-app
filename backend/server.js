import path from "path"
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"


import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js"
import { app, server } from "./socket/socket.js";


const __dirname=path.resolve();

dotenv.config();

app.use(express.json());

app.use(cookieParser())
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req,res)=>
{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

// app.get("/",(req,res)=>
// {
//     res.send("hellow word") 
// })




server.listen(8080,()=>
{
    connectToMongoDB();
    console.log("server is running on port 8080");
})