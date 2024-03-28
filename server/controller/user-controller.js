

import { request, response } from "express";
import user from "../schema/user-schema.js";

export const adduser = async (request, response) => {
    console.log(request.body,"request.body")
    const userData = (request.body);

   const newuser = new user(userData);

   try{
   await  newuser.save();
   response.status(201).json(newuser);
    }catch (error){
        response.status(409).json({Message: error.Message});
    }
}

export const getusers = async (request, response) => {
    try {
     const users =  await user.find({});
     response.status(200).json(users)
    }catch (error){
        response.status(404).json({ message: error.message});

    }
}

export const getuser = async (request, response) => {
    console.log(request.params.id);
    try {
        const user = await user.findById(request.params.id);
        response.status(200).json(user)
       }catch (error){
           response.status(404).json({ message: error.message});
   
       }
}