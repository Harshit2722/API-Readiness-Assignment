const User = require('../UserModel');

const mongoose = require('mongoose');


async function getAllUsers(req,res){
    const users = await User.find();

    res.status(200).json({
        users: users
    })
}

async function CreateUser(req,res,next){
    try{
        const {name,email} = req.body;
    
        if(!name || !email){
            throw new Error('Name and email are required fields');
        }
    
        const newUser = await User.create({name,email});
    
        res.status(201).json({
            User: newUser
        })

    }
    catch(err){
        next(err);
    }
}

async function UpdateUser(req,res,next){
    try{
        const {id} = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new Error("Id is not valid");
        }
        const {name,email} = req.body;
    
        if(!name || !email){
            throw new Error('Name and email are required fields');
        }
    
        const updatedUser = await User.findByIdAndUpdate(id,{name,email},{new:true});

        if(!updatedUser){
            throw new Error("User not found associated with this id");
        }
        
        res.status(201).json({
            User: updatedUser
        })
        
    }
    catch(err){
        next(err);
    }
}

async function DeleteUser(req,res,next){
    try{
        const {id} = req.params;
        
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new Error("Id is not valid");
        }
        
        
        const deletedUser = await User.findByIdAndDelete(id);
        
        if(!deletedUser){
            throw new Error("User not found associated with this id");
        }
        res.status(201).json({
            User: deletedUser
        })

    }
    catch(err){
        next(err);
    }
}


module.exports = {
    getAllUsers,
    CreateUser,
    UpdateUser,
    DeleteUser
}