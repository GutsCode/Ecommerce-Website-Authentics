import jwt from "jsonwebtoken"

const generateToken = (id) =>{
    return jwt.sign({id}, "UEGQFDJ91",{
        expiresIn: "30d",
    });
};

export default generateToken;