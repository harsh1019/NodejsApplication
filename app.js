import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js"
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app =express();

// for working of dotenv dotenv set path for config
config({
    path:"./data/config.env",
});

// ********************* for getting user body data
// using middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    // credentials must be true
    credentials:true,
}));

// isko upar wali line k niche hi rakhna otherwise access nhi hoga
// using Routes
// /api/v1/users ,means all the routes this part is same so just use one time
app.use("/api/v1/users",userRouter);
app.use("/api/v1/task",taskRouter);

// **********************api creation********
app.get("/",(req,res) =>{
    res.send("route is working");
})

// using error middleware
app.use(ErrorMiddleware);