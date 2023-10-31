import React, { useEffect, useState } from "react";
import {auth,provider} from "./firebase";
import {signInWithPopup} from "firebase/auth";
import Body from './Body';
import './signup.css';


function SignIn(){
    const [value,setValue] = useState('')
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }
    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })

return (
    <div>
        {value?<Body/>:
        <img src="googly.png" className="google_img" onClick={handleClick}  alt="google"/>
        }
    </div>
);
}
export default SignIn;