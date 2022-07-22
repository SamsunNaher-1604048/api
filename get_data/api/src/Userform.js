import React, { useEffect, useState } from 'react'


const Userform = ({btntext,submituser,updateuser}) => {
  const [user,Setuser]=useState({
    username:" ",
    email:" "
  })

  const {username,email}=user 

  useEffect(()=>{
   Setuser({
    username:updateuser.username,
    email:updateuser.email
   })
  },[updateuser])

  const changetext=(event)=>{
    const name = event.target.name
    const value= event.target.value
    Setuser(Prestate=>{
      return{
        ...Prestate,[name]:value
      }
    })
  }

  const SubmitData=(event)=>{
        event.preventDefault();
        submituser(user)
        Setuser({
          username:" ",
          email:" "
        })

    }
  return (
        <form onSubmit={SubmitData}>
            <div>
                <label htmlFor='username'>username: </label>
                <input type="text" id="username" value={username} name="username" onChange={changetext}/>
            </div>
            <div>
                <label htmlFor='email'>Email:  </label>
                <input type="email" id="email" name="email"value={email} onChange={changetext}/>
            </div>
            <button type="submit" className="btn">{btntext}</button>
        </form>
  )
}

Userform.defaultProps = {
  updateuser: {
    username: "",
    email: "",
  },
};

export default Userform