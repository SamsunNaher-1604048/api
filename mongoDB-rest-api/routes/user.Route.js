const express=require("express")
const route=express.Router()
const Alluser=require("../controllers/user.con")

route.get("/", Alluser)

module.exports=route