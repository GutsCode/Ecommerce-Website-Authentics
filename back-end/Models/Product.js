import mongoose from "mongoose"

//Product Model
const productSchema =  mongoose.Schema({

    //Main Information
    name:{
        type:String,
        required:true
    },
    modelName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    countInStock:{
        type:Number,
        required:true,
        default:0
    },
    category:[{
        type:String,
        required:true
    }],

    //Product Information 
    sytleID:{
        type:String,
        required:true,
        unique:true
    },
    colorway:{
        type:String,
        required:true
    },
    thumbnailUrl:{
        type:String,
        required:true,
        default:""
    },
    releaseDate:{
        type:String
    },
    retailPrice:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:false
    },

    //Reviews & Ratings Information
    rating:{
        type:Number,
        required: true,
        default: 0
    },
    numReviews:{
        type:Number,
        required: true,
        default: 0
    }
},{timestamps:true})

const Product = mongoose.model("Product", productSchema)

export default Product