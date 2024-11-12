// importing express
// const express = require('express'); - older way
import express from 'express';
// importing dotenv
import dotenv from 'dotenv';
import { connect } from 'mongoose';
import {connectDB} from './config/db.js';
dotenv.config();

//function calling
const app = express();

//allow us to accept json data in the req.body
app.use(express.json());

//route method post is basically when we create something it will store
app.post("/api/products", async(req, res) =>{
    const product = req.body; //user will send this data
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success: false, message: "All fields are required"});
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    } catch (error) {
        console.error("Error in creating product:", error.message);
        res.status(500).json({success: false, message: "Internal server error"});
    }
});

// Call the mongo URI from .env
// console.log(process.env.MONGO_URI);

//port
app.listen(5000, ()=> {
    connectDB();
    console.log("sever started at http://localhost:5000");
});
