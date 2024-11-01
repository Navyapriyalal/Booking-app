import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";

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
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);

app.listen(8800, ()=>{
    connect()
    console.log("Connected to backend.")
})