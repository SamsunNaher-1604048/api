const port =4000;

const app=require("./app")
app.listen(port,()=>{
    console.log(`this app is running at http://localhost:${port}`)
})