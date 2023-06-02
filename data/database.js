import mongoose from "mongoose";
// ****************Database connection

export const connectDb = () =>{ 

mongoose.connect(process.env.MONGO_URI,{
    dbName:"firstapp",
}).then((c)=>{
    console.log(`Database Connected with ${c.connection.host}`);
}).catch((e)=>{
   console.log(e);
});

};
