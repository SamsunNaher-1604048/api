import "./App.css"
import React,{useState,useEffect} from "react";
const url= "https://rest-api-without-db.herokuapp.com/users";




export default function App() {
  const[users,Setuser]=useState()
  const[error,SetError]=useState()

  const Getalluser=()=>{
    fetch(url)
    .then((res)=>{
      if(!res.ok){
        throw Error("sone thing is wrong")
      }
      return res.json()
    })
    .then((data)=>{
      Setuser(data.users)
      console.log(data.users)
    })
    .catch((err)=>{
      SetError(err.message);
    })
  }

  useEffect(()=>{
    Getalluser()
    
  },[])

  return (
    <div className="App">
      <h1>user managenent app</h1>
      {error&&<h1>{error}</h1>}
      {users&& users.map((user)=>{
       return(
        <div key={user.id} className="card">
          <p>{user.username}</p>
          <p>{user.email}</p>
          <button className="btn">Edit</button>
          <button className="btn">Delete</button>
        </div>
       )
      })}
    </div>
  );
}
