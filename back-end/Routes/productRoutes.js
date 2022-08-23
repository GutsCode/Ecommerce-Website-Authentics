import express  from "express";
import Product from "../Models/Product.js";
import asyncHandler from "express-async-handler";

const getProduct = express.Router();

//Get all Products information
getProduct.get("/", asyncHandler( async (req, res) => {
        const products = await Product.find({});
        res.json(products);
        console.log(`<Route Products>: Get Products --- Path: localhost:3001/api/get/products/`);
    })
);

//Find Product by id and get information
getProduct.get("/:id", asyncHandler( async (req, res) => {
        const product = await Product.findById(req.params.id);
        if(product)
        {
            res.json(product);
            console.log("<Route Products>: Product Name: "+product.name+"  was loaded --- Path: localhost:3001/api/get/products/"+product._id );
        }
        else
        {
            res.status(404);
            throw new Error("Product not Found");
        }
    })
);

export default getProduct;