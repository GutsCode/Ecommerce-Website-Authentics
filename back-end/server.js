import express from "express";
import dotenv from "dotenv";
import connectDataBase from './MongoDB/connectionDB.js';
import postData from './MongoDB/postData.js';
import productRoutes from  './Routes/productRoutes.js';
import userRouter from './Routes/userRoutes.js';
import { errorHandler, notFound} from './Middleware/Errors.js';
import orderRouter from "./Routes/orderRoutes.js";

//Call Config from .env
dotenv.config;

// Connect to MongoDB Function
connectDataBase();

//Const
const app = express();
const port = process.env.PORT || 3001;
const paypalID = "ASNqBGYp1LmsexCNfUA17hNpvydYzgZ2WYXSUyENE8PMSbAMTBDqpRA4FPjQZGm4Ri0qjnXTUJ5ryf3x"

//Let express request Body-parser
app.use(express.json())
//API 
//PATH -> (User,Products)
app.use("/api/post",postData);
//PATH -> productRouters
app.use("/api/get/products",productRoutes);
//PATH -> userRouters
app.use("/api/user",userRouter);
//PATH -> orderRouter
app.use("/api/orders",orderRouter);

//PATH -> Get paypal
app.use("/api/setting/paypal", (req,res) => {

    res.send(paypalID)
})


//ERROR HANDLER
//Error Type: Not Found -- Status
app.use(notFound);
//Error Type: JSON
app.use(errorHandler)


app.listen(port, console.log(`Server port: ${port}` ));
