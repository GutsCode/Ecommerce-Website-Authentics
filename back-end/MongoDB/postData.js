import express  from "express";
import User from "../Models/User.js";
import Product from "../Models/Product.js";
import userData from "../Data/userData.js";
import productData from "../Data/productData.js";
import asyncHandler from "express-async-handler";

const postData = express.Router()

//POST userData
postData.post("/user", asyncHandler( async (req,res)=> {
        await User.remove({})
        const postUser = await User.insertMany(userData)
        res.send({postUser})
        console.log(postUser)
    })
);

//POST productData 
postData.post("/products", asyncHandler( async (req,res)=> {
        await Product.remove({})
        const postProduct = await Product.insertMany(productData)
        res.send({postProduct})
        console.log(postProduct)
    })
);

export default postData;