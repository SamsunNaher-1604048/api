import "./App.css"
import React,{useState,useEffect} from "react";
import Userform from "./Userform";
const url= "https://rest-api-without-db.herokuapp.com/users";




export default function App() {
  const[users,Setusers]=useState()
  const[error,SetError]=useState()

  //update
  const[updateuser,Setupdateuser]=useState({
    username:" ",
    email:" ",
  })
  const [updateFlag,SetupdateFlag]=useState(false)
  const[Id,SetId]=useState()

  
  //delete
  const userDelete=(id)=>{
    fetch(url+`/${id}`,{
      method:"DELETE"
    })
    .then((res)=>{
      if(!res.ok){
        throw Error("not delete")
      }
      Getalluser()
    })
    .catch((err)=>{
      SetError(err.message)
    })
  }

  //getUser
  const Getalluser=()=>{
    fetch(url)
    .then((res)=>{
      if(!res.ok){
        throw Error("sone thing is wrong")
      }
      return res.json()
    })
    .then((data)=>{
      Setusers(data.users)
    })
    .catch((err)=>{
      SetError(err.message);
    })
  }

  //add user
  const Adduser=(data)=>{
    fetch(url,{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(data)
    })
    .then((res)=>{
      if(res.status===201){
       Getalluser()
      }
      else{
        throw Error("could not add")
      }
    })
    .catch((err)=>{
      SetError(err.message)
    })
  }

  //update user
  const userEdit=(id)=>{
    SetId(id)
    const filteruser=users.filter((user)=>user.id===id)
    Setupdateuser({
      username:filteruser[0].username,
      email:filteruser[0].email
    })
    SetupdateFlag(true)
  }

  const handelUpdate=(data)=>{
   fetch(url+`/${Id}`,{
    method:"PUT",
    headers:{
      "Content-Type": "application/json",
    },
    body:JSON.stringify(data)
   })
   .then((res)=>{
    if(!res.ok){
      throw Error("not update data")
    }
    Getalluser()
    SetupdateFlag(false)
   })
   .catch((err)=>{
    SetError(err.message)
   })
  }




  useEffect(()=>{
    Getalluser()
  },[])

  return (
    <div className="App">
      <h1>user managenent app</h1>

      {updateFlag?<Userform btntext="Update User" updateuser={updateuser} submituser={handelUpdate}/>:<Userform btntext="Add User" submituser={Adduser}/>}

      {error&&<h1>{error}</h1>}
      {users&& users.map((user)=>{
       return(
        <div key={user.id} className="card">
          <p>{user.username}</p>
          <p>{user.email}</p>
          <button className="btn"  onClick={()=>{userEdit(user.id)}}>Edit</button>
          <button className="btn" onClick={()=>{userDelete(user.id)}}>Delete</button>
        </div>
       )
      })}
    </div>
  );
}
