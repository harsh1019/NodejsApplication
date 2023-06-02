import express from "express";
import { getMyProfile, login, logout, register} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

// for using Router
// ******************creating router ,mini app
const router = express.Router();


// router.get("/all",getAllUsers);
router.post("/new",register);
router.post("/login",login);
router.get("/logout",logout);


// userid/sdfsdfsd
// userid/abhishek
// router.get("/userid/special",specialFunc);

// dynamic route ko niche rakho
// router.get("/userid/:id",getUserDetails);
// router.put("/userid/:id",updateUser);
// router.delete("/userid/:id",deleteUser);
// or eksaath lik sakte
router.get("/me",isAuthenticated,getMyProfile);


export default router;