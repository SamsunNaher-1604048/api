let users = require("../models/user.models")
const{v4:uuid4}=require("uuid");


const Getuser=(req,res)=>{
    res.status(201).json(users)
}

const createUser=(req,res)=>{
    const newuser={
        id:uuid4(),
        name:req.body.name,
        age:req.body.age
    }
     users.push(newuser)
     res.status(202).json({users})

}

const updateUser=(req,res)=>{
    res.status(200).json({
        message:"update"
    })

}


module.exports=Getuser
module.exports=createUser
module.exports=updateUser