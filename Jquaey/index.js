
const makerequest=async(url,method,data)=>{
    try{
        const result= await $.ajax({
            url:url,
            method:method,
            date:data
        })
        return result
    }catch(err){
        console.log(err)
    }
 
}

 const getUser=()=>{
     makerequest("https://jsonplaceholder.typicode.com/posts/1","GET")
    .then((res)=>{
         console.log(res)
    })
 }

const createUser=()=>{
    makerequest("https://jsonplaceholder.typicode.com/posts","POST",{
        title:"ooooooo",
        body:"ppppppp",
        userId:2
    })
    .then((res)=>{
        console.log(res)
    })
}

getUser()
createUser()