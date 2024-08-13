import express from "express";
import { register, login } from "../controller/auth.js";
import { logout } from "../controller/logout.js";

const router=express.Router();
// register: This is the callback function (often referred to as the route handler) 
// that will be executed when a POST request is made to the /register path. 
router.post("/register",register);

router.post("/login",login);

router.post("/logout", logout)
export default router;