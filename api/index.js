import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const app  = express();


mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("Connected to Database")
    app.listen(3000,()=>{
        console.log("Server is running on port:3000")
    })
})
.catch((err)=>{
    console.log(err.message);
})
// after / you can add the name of your database explicitly and if not mentioned any name then by default database name will be test

