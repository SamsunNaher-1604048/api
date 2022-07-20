axios
.get('https://jsonplaceholder.typicode.com/posts')
.then((res)=>console.log(res))
.catch((err)=>console.log(err))

//post method.

axios
  .post('https://jsonplaceholder.typicode.com/posts',{
    method:"POST",
    body:JSON.stringify({
        title:"kkkkkk",
        body:"hhhhhhh",
        id:1,
    }),
  })

.then((res)=>console.log(res))
.catch((err)=>console.log(err))

//put method.
axios
   .put('https://jsonplaceholder.typicode.com/posts/1',{
    body:JSON.stringify({
        id:1,
        title:"oooooooo"
    })
   })
.then((res)=>console.log(res))

//delete

axios
 .delete('https://jsonplaceholder.typicode.com/posts/1')
 .then((res)=>console.log(res))


 ///acync
 const makeRequest=async (config)=>{
    return await axios(config)
 }

 const getdata =()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts')
     .then((res)=>console.log(res))
     .catch((err)=>console.log(err))
 }

 const createData=()=>{
    makeRequest({
        url:'https://jsonplaceholder.typicode.com/posts',
        method:"post",
        data:JSON.stringify({
            title:"qqqqqq",
            body:"oooooooo",
            id:2
        })
    })
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
 }
getdata()