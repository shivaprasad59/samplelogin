import React, { useEffect, useState } from 'react'
import {auth} from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
const SampleLanding = () => {
    const navigate=useNavigate();
    const [userDetails,setUserDetails]=useState("")
    useEffect(()=>{
      const listen=onAuthStateChanged(auth,(user)=>{
        // console.log(user)
        if(user){
            setUserDetails(user);
        }
        else{
            setUserDetails(null);
        }
      })
      return(()=>{
        listen();
      })
    },[])
    const handleSignout=()=>{
       signOut(auth)
       .then((res)=>{
        console.log(res);
        navigate("/")
       })
       .catch((err)=>{
        console.log(err);
       })
    }
  return (
    <div>
        Hello...{userDetails.email}
        <button onClick={handleSignout}>Signout</button>
    </div>
  )
}

export default SampleLanding