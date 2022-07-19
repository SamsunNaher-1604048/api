const express= require("express")
const cors=require("cors")
const bodyParser = require('body-parser')

const app=express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

const route=require("./routes/user.Route")


app.use("/api/user",route)


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html")
})

app.get((req,next,res)=>{
    res.status(404).json({
        message:"this is wrong route",
    })
})

module.exports=app