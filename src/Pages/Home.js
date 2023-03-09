import React, { useEffect } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import {useNavigate} from "react-router-dom"
function Home() {
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
     if(!user){
       navigate('/')
     }
    })
     },[])
  const navigate =useNavigate()
  const handleSignOut  =()=>{
    signOut(auth).then(()=>{
      navigate("/")
    }).catch((err)=>{
      alert(err.message)
    })
  }
  return (
    <div>
      <button onClick={handleSignOut}>SignOut</button>
    </div>
  )
}

export default Home