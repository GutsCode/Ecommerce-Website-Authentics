import express  from "express";
import User from "../Models/User.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import verifyToken from "../Middleware/AuthToken.js";

const userRouter = express.Router();

//Login -> Email & Password 
userRouter.post("/login", asyncHandler( async (req, res) => {
        const {email, password} = req.body
        const user = await User.findOne({email});

        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
                createdAt: user.createdAt
            });
            console.log("<Route User>: "+ email +" just made a Request --- Path: localhost:3001/api/user/login/")
        } 
        else {
            res.status(401)
            throw new Error("Invalid Email or Password")
        }
    })
);
//Register -> Name & Email & Password 
userRouter.post("/register", asyncHandler( async (req, res) => {
        const { name, email, password } = req.body;
        const existAccount = await User.findOne({ email })

        if(existAccount)
        {
            res.status(400)
            throw new Error("Account Already Exist")
        }
        
        const account = await User.create({
            name,
            email,
            password
        });

        if(account){
            res.json({
                _id: account._id,
                name: account.name,
                email: account.email,
                isAdmin: account.isAdmin,
                token: generateToken(account._id),
                createdAt: account.createdAt
            });
            console.log("<Route User>: "+ email +" as created a new Account --- Path: localhost:3001/api/user/register")
        }
        else
        {
            res.status(400)
            throw new Error("Invalid Account data")
        }

    })
)

//Update -> User Profile information
userRouter.put("/profile", verifyToken,asyncHandler( async (req, res) => {
    const user = await User.findById(req.user._id)

    if(user){
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if(req.body.password) {user.password = req.body.password};
        const updateUser = await user.save();
        res.json({
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            isAdmin: updateUser.isAdmin,
            createdAt: updateUser.createdAt,
            token: generateToken(updateUser._id),
        })

        console.log("<Router User> "+ req.user.name+ " | " + req.user.email + " was updated for Name: " + updateUser.name + " Email: "+ updateUser.email)
    }
    else{
        res.status(404)
        throw new Error("User not found")
    }
})
);

//Get all Profile information from user
userRouter.get("/profile", verifyToken,asyncHandler( async (req, res) => {
    const user = await User.findById(req.user._id)

    if(user){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            createdAt: user.createdAt
        });
        console.log("<Route User>: "+  user.email +" just loaded the profile --- Path: localhost:3001/api/user/profile/")
    }
    else{
        res.status(404)
        throw new Error("User not found")
    }
})
);

export default userRouter;