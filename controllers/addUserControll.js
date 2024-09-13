const User = require("../models/userModel");

const addUser=async(req,res)=>{
    const {number,password}=req.body;
    if(!number || !password){
        return;
    }

    const user=User.create({
        number,
        password
    })
    if(user){
        res.status(201).json({
            number,
            password
        })
    }else{
        console.log("user not found")
    }
}

module.exports={
    addUser
}