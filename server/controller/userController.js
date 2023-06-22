const userModel = require("../models/userModel");

exports.getAllcont=async(req,res)=>{
        try {
          const dat=await userModel.find({});
       return res.status(200).json({
            success:true,
            dat
        });
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:'problem fetching user'
        });
    }  
}


exports.addUser=async(req,res)=>{
    try {
        const emp= await userModel.create(req.body)
        return  res.status(201).json({
            success:true,
            message:'user created'
        });
    } catch (error) {
        return   res.status(400).json({
            success:false,
            message:'problem in creating user'
        });
    }  
}

exports.deleteUser=async(req,res)=>{
    try {
        await userModel.findByIdAndDelete(req.params.id)
        return  res.status(200).send({
            success:true,
            message:"delete successfull"
        })
    } catch (error) {
        return   res.status(400).json({
            success:false,
            message:'problem in deleting user'
        });  
    }
}

exports.updateUser=async(req,res)=>{
    try {
        const ids=await userModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return  res.status(200).send({
            success:true,
            message:"update successfull"
        })

        } catch (error) {
            return  res.status(400).send({
                success:false,
                message:"fail update"
            })
        }
}