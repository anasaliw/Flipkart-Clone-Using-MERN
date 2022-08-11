import { response } from "express";
import User from "../../model/user-Schema.js";

// ! Adding And Validating The user Form;

export const userDetails = async (req, res) => {
  try {
    const data = req.body;
    const exist = await User.findOne({ username: data.username});
    if (exist) {
     return response.status(401).json({message:'username already exist'});
    }
    const userData =  new User(data);
    await userData.save();
    res.status(200).json({ message: userData });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const userSignIn=async(req,res)=>{
  try {
   const exist= await User.findOne({username:req.body.username,password:req.body.password});
   if(exist){
   return res.status(200).json({data: exist});
   }
   else{
    return res.status(401).json('invalid login')
   }
  } catch (error) {
    res.status(500).json({ message: error.message });
    
  }



}
