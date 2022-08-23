import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken"
import User from "../Models/User.js";

const verifyToken = asyncHandler(async (req,res,next) =>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer"))
    {
        try
        {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, "    ") //TOKEN ENV

            console.log(decoded)
            req.user = await User.findById(decoded.id).select("-password")
            next()
        } 
        catch (error) 
        {
            console.error(error);
            res.status(401)
            throw new Error("Not authorized, token failed");
        }
    }
    if(!token){
        res.status(401)
        throw new Error("Not authorized, no token")
    }

})

export default verifyToken;