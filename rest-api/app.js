const express =require("express")
const cors=require("cors")
const bodyParser = require("body-parser");

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const userRoute=require("./routs/user.routs")

app.use("/user",userRoute)



//home route
app.get('/',(req,res)=>{
    res.sendFile(__dirname+ "/viwes/index.html")
})


//error route
app.use((req,res,next)=>{
   res.status(404).json({
    message:"this is error route"
   })
})

module.exports=app;

