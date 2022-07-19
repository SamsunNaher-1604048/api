const app=require("./app")
const port=4000

app.listen(port,(req,res)=>{
    console.log(`this app is running at:http://localhost:${port}`)
})