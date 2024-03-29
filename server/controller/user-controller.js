

import { request, response } from "express";
import User from "../schema/user-schema.js";

export const adduser = async (request, response) => {
    console.log(request.body,"request.body")
    const userData = (request.body);

   const newuser = new User(userData);

   try{
   await  newuser.save();
   response.status(201).json(newuser);
    }catch (error){
        response.status(409).json({Message: error.Message});
    }
}

export const getusers = async (request, response) => {
    try {
     const users =  await User.find({});
     response.status(200).json(users)
    }catch (error){
        response.status(404).json({ message: error.message});

    }
}

export const getuser = async (request, response) => {
    console.log(request.params.id);
    try {
        const user = await User.find({_id:request.params.id});
       
        response.status(200).json(user);
    } catch (error) {
        response.status(500).json(error);
    }
}


// export const getUserById = async (req,res) => {
  
//     try {
//         const user = await User.find({_id :  req.params.id});
//         response.status(200).json(user);
//     } catch (error) {
//         response.status(500).json(error);
//     }
// }