import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
//route method post is basically when we create something it will store
router.post("/", createProduct);
// Call the mongo URI from .env
// console.log(process.env.MONGO_URI);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;