import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
dotenv.config()
const app = express()

const connect = async() =>{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("db is connected")
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected",()=>{
console.log("db is disconnected")
})

//middlewares
app.use("/auth", authRoute);

app.listen(8800, ()=>{
    connect()
    console.log("Connected to backend.")
})