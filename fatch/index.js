 fetch('https://jsonplaceholder.typicode.com/posts',{
     method:'POST',
    headers: {
         'Content-type': 'application/json; charset=UTF-8',
    },
    body:JSON.stringify({
         title: 'foo',
        body: 'bar',
        userId: 1,
    }),
 })

 .then((res)=>{
     if(!res.ok){
        const message="erroe"
         throw new Error(message);
     }
     return res.json()
 })
  .then((res)=>console.log(res))
 .catch((err)=>console.log(err))

const makeRequest=async()=>{
   const res= await fetch('https://jsonplaceholder.typicode.com/posts')
   if(!res.ok){
    const message="error";
    throw new Error(message)
   }
   const data=await responce.json()
   return data;
}

const getData=()=>{
    makeRequest()
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
}

getData()