import mongoose from "mongoose";

const connectDataBase = async() =>{

    // ENV KEY (MONGO DB KEY)
    const client = "";

    try
    {
        const connection = mongoose.connect(client, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        } );
        console.log(`Connect to MongoDB`)
    }
    catch(Error) 
    {
        console.log(`Erro: ${Error.message}`);
        process.exit(1);
    };
};

export default connectDataBase;

