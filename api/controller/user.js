import User from "../models/hotel.js"

export const getUsers=async (req,res,next)=>{

    try{
        const users=await User.find();
        res.status(200).json(users);
    }catch(err){
        next(err);
    }

}

export const getUser=async (req,res,next)=>{

    try{
        const user=await user.findById(req.params.id);
        res.status(200).json(user);
    }catch(err){
        next(err) //pointing to next middleware
    }

}

export const updateUser=async (req,res,next)=>{

    try{
        const user=await User.findByIdAndUpdate(req.params.id,
            {$set : req.body},
            {name:true}
        );
        res.status(200).json(user);
    }catch(err){
        next(err) //pointing to next middleware
    }

}

export const deleteUser=async (req,res,next)=>{

    try{
        await user.findByIdAndDelete(req.params.id);
        res.status(200).json("user is deleted");
    }catch(err){
        next(err);
    }

}