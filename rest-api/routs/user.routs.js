const express=require("express");
 const updateUser = require("../controller/UserControllers");
 const createUser = require("../controller/UserControllers");
const Getuser = require("../controller/UserControllers");
 const routes=express.Router()


routes.get("/",Getuser);
routes.post("/",createUser);
routes.put("/:id",updateUser)

 module.exports=routes;

