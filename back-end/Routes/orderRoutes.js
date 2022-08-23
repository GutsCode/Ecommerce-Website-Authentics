import express  from "express";
import Order from "../Models/Order.js";
import asyncHandler from "express-async-handler";
import verifyToken from "../Middleware/AuthToken.js";

const orderRouter = express.Router();

//Create Order
orderRouter.post("/", verifyToken, asyncHandler( async (req, res) => {

    const {
        orderItems,
        shippingSettings,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice
    } = req.body

    if(orderItems && orderItems.length === 0){
        res.status(400)
        throw new Error("No order items")
        return;
    } else {
        const order = new Order({
            orderItems,
            user:req.user._id,
            shippingSettings,
            paymentMethod,
            itemsPrice,
            shippingPrice,
            taxPrice,
            totalPrice
        })

        console.log("<Route Order>: Order id: "+order._id+"  as been created");
        const createOrder = await order.save()
        res.status(201).json(createOrder)
    }

}))

//Get Details from Order By ID
orderRouter.get("/:id", verifyToken, asyncHandler( async (req, res) => {

    const order = await Order.findById(req.params.id).populate("user","name email")
    
    console.log("<Route Order>: Order id: "+order._id+"  was loaded");

    if(order){
       res.json(order)
    } else {
     
        res.status(404)
        throw new Error("Order Not Found")
    }

}))

//Update Order if was paid or not
orderRouter.put("/:id/pay", verifyToken, asyncHandler( async (req, res) => {
    const order = await Order.findById(req.params.id)

    if(order)
    {
        order.isPaid = true,
        order.paidAt = Date.now(),
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            updateTime: req.body.updateTime,
            emailAddress: req.body.emailAddress
        };
    }

    const updatedOrder = await order.save()
    res.json(updatedOrder)
    console.log("<Route Order>: Order id: "+order._id+"  was updated");

    if(order){
       res.json(order)
    } else {
     
        res.status(404)
        throw new Error("Order Not Found")
    }

}));

//User Orders by id
orderRouter.get("/", verifyToken, asyncHandler( async (req, res) => {
    const order = await Order.find({user: req.user._id}).sort({ _id: -1});
    res.json(order)
}));

export default orderRouter;