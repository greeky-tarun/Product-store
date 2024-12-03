// importing express
// const express = require('express'); - older way
import express from 'express';
// importing dotenv
import dotenv from 'dotenv';
import mongoose, { connect } from 'mongoose';
import {connectDB} from './config/db.js';

import productRoutes from "./routes/product.route.js";

dotenv.config();

//function calling
const app = express();
const PORT = process.env.PORT || 5000;

//allow us to accept json data in the req.body
app.use(express.json());

app.use("/api/products", productRoutes);

//port
app.listen(PORT, ()=> {
    connectDB();
    console.log("sever started at http://localhost:"+PORT);
});
