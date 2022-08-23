import bcrypt from "bcryptjs";

const userData = [
    {
        name:"Admin",
        email:"admin@root.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin:true
    },
    {
        name:"User",
        email:"user@example.com",
        password: bcrypt.hashSync("123456", 10)
    }
];

export default userData;