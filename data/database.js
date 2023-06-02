import mongoose from "mongoose";
// ****************Database connection

export const connectDb = () =>{ 

mongoose.connect(process.env.MONGO_URI,{
    dbName:"firstapp",
}).then(()=>{
    console.log("Database Connected");
}).catch((e)=>{
   console.log(e);
});

};
