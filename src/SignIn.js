import React, { useEffect, useState } from "react";
import {auth,provider} from "./firebase";
import {signInWithPopup} from "firebase/auth";
import Body from './Body';

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
        <img className="google_img" onClick={handleClick} src="google.png" alt="google"/>
        }
    </div>
);
}
export default SignIn;