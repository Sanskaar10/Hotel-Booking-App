//so that only admin can update our info
import jwt from "jsonwebtoken"
import { createError } from "../utils/error.js"

export const verifyToken= (req,res,next)=> {
    const token=req.cookies.access_token; //jab client ne browser se req ki to usme 
    //cookies bhi aayengi agr browser ke paas hongi to 

    if(!token) return next(createError(401,"You are not authenticated!"));

    //use a scret key to verify given token
    jwt.verify(token,process.env.JWT, (err,user)=>{
        if(err) return next(createError(403,"Invalid token!"));

        req.user=user; //creating a new property user
        next();
    })
}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        return next(createError(403, "You are not authorized!"));
      }
    });
  };

  export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
      if (req.user.isAdmin) { //this req is of verifyToken
        next();
      } else {
        return next(createError(403, "You are not an Admin!"));
      }
    });
  };