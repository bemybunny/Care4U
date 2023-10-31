import React from "react";
import SignUp from "./SignUp";
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  const logout =()=>{
    localStorage.clear()
    window.location.reload()
}
return (
    <div>
        <SignUp/>
        <button onClick={logout}>Logout</button>
    </div>
);
}

export default App;
