import express from "express";
import {getUsers, getUser, updateUser, deleteUser} from "../controller/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router=express.Router();

// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("Hello you are logged in!");
// })

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("Hello user you are logged in and you can delete your account!");
// })

// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("Hello admin you are logged in and you can delete all account!");
// })

//READ ALL
router.get("/", verifyAdmin, getUsers);

//READ ONE
router.get("/:id", verifyUser, getUser)

// UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

export default router;