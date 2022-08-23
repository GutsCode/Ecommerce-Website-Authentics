import mongoose from "mongoose"

const orderSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },

    //Order Product Information
    orderItems:[
        {
            modelName: {type:String, required:true},
            name: {type:String, required:true},
            thumbnailUrl:{type:String, required:true},
            size: {type:Number, required:true},
            price:{type:String, required:true},
            product:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:"Product"
            }
        },
    ],

    //Shipping & Payment Method Information
    shippingSettings:{
        address: {type:String, required:true},
        city: {type:String, required:true},
        postalcode: {type:String, required:true},
        country: {type:String, required:true}
    },
    
    paymentMethod:{
        type:String,
        require:true,
        default:"Paypal"
    },
    
    paymentResult:{
        id:{type:String},
        status:{type:String},
        updateTime:{type:String},
        emailAddress:{type:String}
    },

    //Price Information
    taxPrice:{
        type: Number,
        required:true,
        default: 0.0
    },
    shippingPrice:{
        type: Number,
        required:true,
        default: 0.0
    },
    totalPrice:{
        type: Number,
        required:true,
        default: 0.0
    },

    //Paid & Delivered Information
    isPaid:{
        type: Boolean,
        required:true,
        default: false
    },
    paidAt:{
        type: Date
    },
    isDelivered:{
        type: Boolean,
        required:true,
        default: false
    },
    deliveredAt:{
        type: Date
    }

},{timestamps:true})

const Order = mongoose.model("Order", orderSchema)

export default Order