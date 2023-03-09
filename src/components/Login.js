import React, { useState, useEffect } from "react"
import { auth } from "../firebaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/home")
      }
    })
  }, [])
 
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/home')
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  return (
    <div>
      <input type='text' value={email} onChange={handleEmailChange} />
      <input
        type='password'
        value={password}
        onChange={handlePasswordChange}
        name=''
        id=''
      />
      <button onClick={handleLogin}>LOGIN</button>
    </div>
  )
}

export default Login
